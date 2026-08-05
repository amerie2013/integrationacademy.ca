import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

ch["9.1"] = L("9.1", "Circle Vocabulary and Central Angles (MA.912.GR.6.2)", [
  lessonHtml({
    title: "Circle Vocabulary & Central Angles",
    emoji: "⭕",
    overview: `A circle is the set of all points a fixed distance (the <strong>radius</strong>) from a fixed center. Before any circle theorem makes sense, you need its vocabulary: chords, diameters, and arcs. A <strong>central angle</strong> has its vertex at the circle's center, and it plays a foundational role — by definition, its measure equals the measure of the arc it cuts off. Every other angle theorem about circles, starting in the next lesson, is built by comparing to this basic rule.`,
    toolkit: [
      `<strong>Radius:</strong> center to a point on the circle. <strong>Diameter</strong> \\(=2\\times\\)radius, the longest possible chord.`,
      `<strong>Chord:</strong> a segment joining two points on the circle (a diameter is the special chord that passes through the center).`,
      `<strong>Arc:</strong> a piece of the circle's edge between two points. A <strong>minor arc</strong> measures less than \\(180^\\circ\\); a <strong>major arc</strong> measures more than \\(180^\\circ\\); a <strong>semicircle</strong> measures exactly \\(180^\\circ\\).`,
      `<strong>Central angle:</strong> vertex at the center; by definition, \\(m\\angle(\\text{central})=m\\widehat{\\text{arc}}\\) (the arc it intercepts).`,
      `<strong>Arc Addition Postulate:</strong> \\(m\\widehat{AB}+m\\widehat{BC}=m\\widehat{AC}\\) for adjacent arcs.`,
    ],
    examples: [
      {
        h: "Minor and major arc from a central angle",
        p: "Central angle \\(\\angle AOB=72^\\circ\\). Find the measures of minor arc \\(AB\\) and major arc \\(AB\\).",
        steps: [
          `<strong>Step 1 — Minor arc:</strong> equals the central angle directly, \\(m\\widehat{AB}=72^\\circ\\).`,
          `<strong>Step 2 — Major arc:</strong> the rest of the circle, \\(360^\\circ-72^\\circ=288^\\circ\\).`,
        ],
      },
      {
        h: "Using the Arc Addition Postulate",
        p: "\\(m\\widehat{AB}=40^\\circ\\) and \\(m\\widehat{BC}=65^\\circ\\), where \\(B\\) lies between \\(A\\) and \\(C\\) on the circle. Find \\(m\\widehat{AC}\\).",
        steps: [
          `<strong>Step 1 — Apply the postulate:</strong> \\(m\\widehat{AC}=m\\widehat{AB}+m\\widehat{BC}\\).`,
          `<strong>Step 2 — Add:</strong> \\(m\\widehat{AC}=40^\\circ+65^\\circ=105^\\circ\\).`,
        ],
      },
      {
        h: "Central angles around a full circle",
        p: "Three central angles at the same center measure \\(110^\\circ\\), \\(95^\\circ\\), and \\(x\\), with no overlap and covering the whole circle. Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Use the fact that central angles around a point sum to \\(360^\\circ\\):</strong> \\(110^\\circ+95^\\circ+x=360^\\circ\\).`,
          `<strong>Step 2 — Solve:</strong> \\(205^\\circ+x=360^\\circ \\Rightarrow x=155^\\circ\\).`,
        ],
      },
      {
        h: "A diameter splitting central angles",
        p: "\\(A\\) and \\(B\\) are endpoints of a diameter, and \\(C\\) is another point on the circle. \\(m\\angle AOC=2x\\) and \\(m\\angle BOC=3x\\). Find \\(x\\) and each angle.",
        steps: [
          `<strong>Step 1 — Use the straight-line relationship:</strong> since \\(A\\), \\(O\\), \\(B\\) are collinear (a diameter), \\(\\angle AOC\\) and \\(\\angle BOC\\) form a linear pair: \\(2x+3x=180^\\circ\\).`,
          `<strong>Step 2 — Solve:</strong> \\(5x=180^\\circ \\Rightarrow x=36^\\circ\\).`,
          `<strong>Step 3 — Find each angle:</strong> \\(m\\angle AOC=72^\\circ\\), \\(m\\angle BOC=108^\\circ\\).`,
        ],
        check: "\\(72^\\circ+108^\\circ=180^\\circ\\). ✓",
      },
      {
        h: "The diameter is the longest chord",
        p: "A circle has radius 9. Is a chord of length 20 possible in this circle?",
        steps: [
          `<strong>Step 1 — Find the diameter:</strong> \\(d=2(9)=18\\).`,
          `<strong>Step 2 — Compare:</strong> the diameter is the longest possible chord, and \\(20>18\\).`,
        ],
        check: "No — a chord of length 20 is impossible in a circle of radius 9, since no chord can exceed the diameter.",
      },
    ],
    practice: [
      { q: "A central angle measures \\(130^\\circ\\). Find the minor and major arc measures.", a: "Minor arc \\(=130^\\circ\\); major arc \\(=360^\\circ-130^\\circ=230^\\circ\\)." },
      { q: "\\(m\\widehat{AB}=52^\\circ\\), \\(m\\widehat{BC}=88^\\circ\\). Find \\(m\\widehat{AC}\\).", a: "\\(52^\\circ+88^\\circ=140^\\circ\\)." },
      { q: "Three central angles around a point measure \\(100^\\circ\\), \\(120^\\circ\\), and \\(x\\). Find \\(x\\).", a: "\\(100^\\circ+120^\\circ+x=360^\\circ \\Rightarrow x=140^\\circ\\)." },
      { q: "\\(A\\), \\(B\\) are diameter endpoints; \\(C\\) is on the circle with \\(m\\angle AOC=4x\\) and \\(m\\angle BOC=5x\\). Find \\(x\\) and each angle.", a: "\\(4x+5x=180^\\circ \\Rightarrow 9x=180^\\circ \\Rightarrow x=20^\\circ\\). Angles: \\(80^\\circ\\) and \\(100^\\circ\\)." },
      { q: "A circle has radius \\(6.5\\). What is its diameter, and what is the longest possible chord?", a: "Diameter \\(=13\\); the longest chord is also \\(13\\) (the diameter itself)." },
    ],
    qa: [
      { q: "Is a diameter also a chord?", a: "Yes — it's the special chord that happens to pass through the center, and it's the longest chord possible in that circle." },
      { q: "What's the difference between an arc's measure and its length?", a: "The measure is in degrees, matching its central angle, and doesn't depend on the circle's size. The length is an actual distance, which also depends on the radius — covered in Lesson 9.5." },
      { q: "How do the minor and major arcs between the same two points relate?", a: "Their measures always add to \\(360^\\circ\\), the full circle." },
      { q: "Can a central angle be greater than \\(180^\\circ\\)?", a: "Usually we name the central \"angle\" itself as \\(180^\\circ\\) or less, but its associated major arc can still be described using a measure greater than \\(180^\\circ\\) — pay attention to which arc a problem is asking about." },
      { q: "Why does a central angle equal its intercepted arc exactly, with no factor of \\(\\dfrac12\\) or \\(2\\)?", a: "Because that's the starting definition — the degree measure of an arc is defined to equal its central angle. Every other circle-angle theorem (like the Inscribed Angle Theorem in 9.2) is built by comparing to this baseline." },
    ],
  }),
]);

ch["9.2"] = L("9.2", "Inscribed Angles and Intercepted Arcs (MA.912.GR.6.2)", [
  lessonHtml({
    title: "Inscribed Angles",
    emoji: "🎯",
    overview: `An <strong>inscribed angle</strong> has its vertex on the circle itself, with two chords as its sides — a very different setup from a central angle. The <strong>Inscribed Angle Theorem</strong> says an inscribed angle is always exactly <em>half</em> its intercepted arc. Two powerful corollaries follow immediately: inscribed angles that intercept the same arc are congruent to each other, and an inscribed angle that intercepts a semicircle (subtends a diameter) is always a right angle.`,
    toolkit: [
      `<strong>Inscribed angle:</strong> vertex on the circle, sides are two chords.`,
      `<strong>Inscribed Angle Theorem:</strong> \\(m\\angle(\\text{inscribed})=\\dfrac12\\,m\\widehat{\\text{arc}}\\) — half its intercepted arc.`,
      `<strong>Corollary:</strong> two inscribed angles that intercept the same arc are congruent.`,
      `<strong>Corollary (Thales' Theorem):</strong> an angle inscribed in a semicircle (subtending a diameter) is a right angle.`,
      `Compared to a central angle on the same arc, an inscribed angle is always exactly <strong>half</strong> the central angle's measure.`,
    ],
    examples: [
      {
        h: "Inscribed angle from an arc",
        p: "An inscribed angle intercepts an arc of \\(84^\\circ\\). Find the inscribed angle's measure.",
        steps: [
          `<strong>Step 1 — Apply the Inscribed Angle Theorem:</strong> \\(m\\angle=\\dfrac12(84^\\circ)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(m\\angle=42^\\circ\\).`,
        ],
      },
      {
        h: "Arc from an inscribed angle",
        p: "An inscribed angle measures \\(55^\\circ\\). Find its intercepted arc.",
        steps: [
          `<strong>Step 1 — Reverse the theorem:</strong> the arc is double the inscribed angle: \\(m\\widehat{\\text{arc}}=2(55^\\circ)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(m\\widehat{\\text{arc}}=110^\\circ\\).`,
        ],
      },
      {
        h: "Two inscribed angles on the same arc",
        p: "Inscribed angles \\(\\angle ACB\\) and \\(\\angle ADB\\) both intercept arc \\(AB\\), with \\(m\\angle ACB=3x+5\\) and \\(m\\angle ADB=4x-10\\). Find \\(x\\) and each angle.",
        steps: [
          `<strong>Step 1 — Use the congruent-inscribed-angles corollary:</strong> since both intercept the same arc, \\(3x+5=4x-10\\).`,
          `<strong>Step 2 — Solve:</strong> \\(15=x\\).`,
          `<strong>Step 3 — Find the angle:</strong> \\(m\\angle ACB=3(15)+5=50^\\circ\\).`,
        ],
        check: "\\(m\\angle ADB=4(15)-10=50^\\circ\\), matching \\(m\\angle ACB\\). ✓",
      },
      {
        h: "A right triangle inscribed in a semicircle",
        p: "Triangle \\(ABC\\) is inscribed in a circle with \\(\\overline{AB}\\) as a diameter. \\(m\\angle A=35^\\circ\\). Find \\(m\\angle B\\).",
        steps: [
          `<strong>Step 1 — Apply Thales' Theorem:</strong> since \\(\\overline{AB}\\) is a diameter, the angle at \\(C\\) (opposite it) is a right angle: \\(m\\angle C=90^\\circ\\).`,
          `<strong>Step 2 — Use the Triangle Angle-Sum Theorem:</strong> \\(m\\angle B=180^\\circ-90^\\circ-35^\\circ\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(m\\angle B=55^\\circ\\).`,
        ],
      },
      {
        h: "Comparing a central and inscribed angle",
        p: "Central angle \\(\\angle AOB=100^\\circ\\), and \\(C\\) is a point on the major arc \\(AB\\). Find inscribed angle \\(\\angle ACB\\).",
        steps: [
          `<strong>Step 1 — Find the intercepted arc:</strong> the central angle equals its arc, so \\(m\\widehat{AB}=100^\\circ\\) (the minor arc, which \\(\\angle ACB\\) intercepts from the major-arc side).`,
          `<strong>Step 2 — Apply the Inscribed Angle Theorem:</strong> \\(m\\angle ACB=\\dfrac12(100^\\circ)\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(m\\angle ACB=50^\\circ\\).`,
        ],
        check: "As expected, the inscribed angle (50°) is exactly half the central angle (100°) on the same arc.",
      },
    ],
    practice: [
      { q: "An inscribed angle intercepts an arc of \\(96^\\circ\\). Find the angle.", a: "\\(\\dfrac12(96^\\circ)=48^\\circ\\)." },
      { q: "An inscribed angle measures \\(63^\\circ\\). Find its intercepted arc.", a: "\\(2(63^\\circ)=126^\\circ\\)." },
      { q: "Two inscribed angles intercept the same arc: \\(2x+8\\) and \\(5x-19\\). Find \\(x\\) and the angle measure.", a: "\\(2x+8=5x-19 \\Rightarrow 27=3x \\Rightarrow x=9\\); angle \\(=2(9)+8=26^\\circ\\)." },
      { q: "A right triangle is inscribed with its hypotenuse as a diameter. One acute angle is \\(28^\\circ\\). Find the other.", a: "The angle opposite the diameter is \\(90^\\circ\\) (Thales), so the other acute angle is \\(180^\\circ-90^\\circ-28^\\circ=62^\\circ\\)." },
      { q: "A central angle measures \\(150^\\circ\\). Find the inscribed angle subtending the same arc.", a: "\\(\\dfrac12(150^\\circ)=75^\\circ\\)." },
    ],
    qa: [
      { q: "What makes an angle \"inscribed\" instead of \"central\"?", a: "A central angle has its vertex at the circle's center; an inscribed angle has its vertex on the circle itself, with two chords as its sides." },
      { q: "Why is an angle inscribed in a semicircle always \\(90^\\circ\\)?", a: "It intercepts a semicircular arc of \\(180^\\circ\\), and by the Inscribed Angle Theorem, the inscribed angle is always half its arc: \\(\\dfrac12(180^\\circ)=90^\\circ\\)." },
      { q: "If two inscribed angles intercept the same arc but sit at different points on the circle, are they always equal?", a: "Yes — as long as both angles open toward the same arc (their vertices lie on the remaining arc), they're always congruent, regardless of exactly where each vertex sits." },
      { q: "How does the Inscribed Angle Theorem connect to the central-angle rule?", a: "A central angle equals its arc directly, while an inscribed angle intercepting the same arc is always exactly half of that central angle — a factor of \\(\\dfrac12\\) is the whole difference between the two rules." },
      { q: "Can an inscribed angle intercept a major arc?", a: "Yes — if the angle's vertex sits on the minor-arc side of the circle, its rays intercept the major arc instead, and the theorem still applies: the angle is half of that major arc's measure." },
    ],
  }),
]);

ch["9.3"] = L("9.3", "Chords, Tangents, and Secants (Lengths and Angle Measures) (MA.912.GR.6.1)", [
  lessonHtml({
    title: "Chords, Tangents & Secants",
    emoji: "🔗",
    overview: `Chords, tangents, and secants all interact with a circle in structured ways that produce clean length and angle theorems. Perpendiculars from the center bisect chords; tangent segments from an external point always come in congruent pairs; and whenever two chords, secants, or tangents meet — whether inside, on, or outside the circle — there's a formula linking the angle at their intersection to the arcs they cut off, and a matching formula linking the lengths of the pieces.`,
    toolkit: [
      `A <strong>perpendicular from the center to a chord</strong> bisects the chord (and its arc); conversely, a segment from the center that bisects a chord is perpendicular to it.`,
      `<strong>Congruent chords</strong> are equidistant from the center, and equidistant chords are congruent.`,
      `A <strong>tangent line</strong> is perpendicular to the radius drawn to the point of tangency. <strong>Two tangent segments</strong> from the same external point are always congruent.`,
      `<strong>Angle formulas:</strong> two chords intersecting <em>inside</em> the circle \\(\\Rightarrow\\) angle \\(=\\dfrac12(\\text{sum of intercepted arcs})\\); two secants/tangents meeting <em>outside</em> the circle \\(\\Rightarrow\\) angle \\(=\\dfrac12(\\text{difference of intercepted arcs})\\).`,
      `<strong>Length formulas</strong> from an intersection point: chord–chord, \\(a\\cdot b=c\\cdot d\\) (products of the two pieces on each chord are equal); tangent–secant, \\(t^2=(\\text{whole secant})(\\text{external part})\\).`,
    ],
    examples: [
      {
        h: "Perpendicular bisecting a chord",
        p: "A circle has radius 13. A chord sits a distance of 5 from the center. Find the chord's length.",
        steps: [
          `<strong>Step 1 — Set up the right triangle:</strong> the radius, the distance to the chord, and half the chord form a right triangle, with the radius as the hypotenuse.`,
          `<strong>Step 2 — Apply the Pythagorean theorem:</strong> half-chord \\(=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12\\).`,
          `<strong>Step 3 — Double it:</strong> chord \\(=2(12)=24\\).`,
        ],
      },
      {
        h: "Two tangent segments from an external point",
        p: "From external point \\(P\\), two tangent segments to a circle have lengths \\(3x+2\\) and \\(23\\). Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> tangent segments from the same external point are congruent: \\(3x+2=23\\).`,
          `<strong>Step 2 — Solve:</strong> \\(3x=21 \\Rightarrow x=7\\).`,
        ],
      },
      {
        h: "Chord–chord length theorem",
        p: "Two chords intersect inside a circle. One chord splits into segments 6 and 12; the other splits into segments 8 and \\(x\\). Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Apply the chord–chord product rule:</strong> \\(6\\cdot12=8\\cdot x\\).`,
          `<strong>Step 2 — Solve:</strong> \\(72=8x \\Rightarrow x=9\\).`,
        ],
      },
      {
        h: "Tangent–secant length theorem",
        p: "From an external point, a tangent segment has length \\(t\\), and a secant through the same point has an external segment of length 4 and a far segment of length 12 (so the whole secant is \\(16\\)). Find \\(t\\).",
        steps: [
          `<strong>Step 1 — Apply the tangent–secant rule:</strong> \\(t^2=(\\text{whole})(\\text{external})=16(4)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(t^2=64\\).`,
          `<strong>Step 3 — Solve:</strong> \\(t=8\\).`,
        ],
      },
      {
        h: "Angle from two secants outside the circle",
        p: "Two secants from an external point intercept arcs of \\(100^\\circ\\) and \\(30^\\circ\\). Find the angle at their intersection.",
        steps: [
          `<strong>Step 1 — Apply the outside-angle rule:</strong> angle \\(=\\dfrac12(\\text{difference of the arcs})=\\dfrac12(100^\\circ-30^\\circ)\\).`,
          `<strong>Step 2 — Simplify:</strong> angle \\(=\\dfrac12(70^\\circ)=35^\\circ\\).`,
        ],
      },
    ],
    practice: [
      { q: "A circle has radius 10, and a chord has length 16. Find the distance from the center to the chord.", a: "Half-chord \\(=8\\); distance \\(=\\sqrt{10^2-8^2}=\\sqrt{36}=6\\)." },
      { q: "Two tangent segments from an external point have lengths \\(5x-3\\) and \\(27\\). Find \\(x\\).", a: "\\(5x-3=27 \\Rightarrow 5x=30 \\Rightarrow x=6\\)." },
      { q: "Two chords intersect inside a circle, splitting into segments 9 and 8, and 6 and \\(x\\). Find \\(x\\).", a: "\\(9\\cdot8=6x \\Rightarrow 72=6x \\Rightarrow x=12\\)." },
      { q: "A tangent segment has length 12, and a secant from the same external point has an external segment of 8. Find the whole secant length.", a: "\\(12^2=8w \\Rightarrow 144=8w \\Rightarrow w=18\\) (so the far segment is \\(18-8=10\\))." },
      { q: "Two chords intersect inside a circle, intercepting arcs of \\(95^\\circ\\) and \\(55^\\circ\\). Find the angle at their intersection.", a: "\\(\\dfrac12(95^\\circ+55^\\circ)=\\dfrac12(150^\\circ)=75^\\circ\\)." },
    ],
    qa: [
      { q: "How do I know whether to use the sum or the difference of the arcs for an angle?", a: "If the vertex is inside the circle (two chords crossing), use the sum of the two intercepted arcs, divided by 2. If the vertex is outside the circle (two secants, two tangents, or a secant and a tangent), use the difference of the two intercepted arcs, divided by 2." },
      { q: "Why are two tangent segments from the same external point always congruent?", a: "The two right triangles formed with the radii to each point of tangency are congruent by HL: they share the same hypotenuse (external point to center), have congruent legs (equal radii), and both have a right angle at the point of tangency — so the tangent legs must match." },
      { q: "What's the general pattern behind all the length theorems?", a: "In every case, the product of the two pieces along one line through the intersection point equals the product of the two pieces along the other line — with \"tangent times tangent\" simplifying to tangent-squared, since both pieces are the same segment." },
      { q: "Does the perpendicular-bisects-a-chord theorem work for any chord?", a: "Yes — any radius or diameter drawn perpendicular to a chord always bisects that chord (and its arc), no matter where the chord sits in the circle." },
      { q: "What if a problem gives arcs instead of segment lengths?", a: "Use the angle formulas (sum or difference of arcs, divided by 2) rather than the length theorems — arc information tells you about angles, while segment lengths tell you about the length theorems." },
    ],
  }),
]);

ch["9.4"] = L("9.4", "Circles in the Coordinate Plane: Equation $(x-h)^{2}+(y-k)^{2}=r^{2}$ (MA.912.GR.7.2, MA.912.GR.7.3)", [
  lessonHtml({
    title: "Equation of a Circle",
    emoji: "🧭",
    overview: `A circle's equation comes directly from the distance formula: every point \\((x,y)\\) on a circle centered at \\((h,k)\\) with radius \\(r\\) is exactly \\(r\\) units from the center, so \\((x-h)^2+(y-k)^2=r^2\\). This <strong>standard (center–radius) form</strong> makes the center and radius easy to read off directly. Circles are sometimes given instead in <strong>general form</strong>, \\(x^2+y^2+Dx+Ey+F=0\\), which requires completing the square in \\(x\\) and in \\(y\\) to convert back to standard form.`,
    toolkit: [
      `<strong>Standard form:</strong> \\((x-h)^2+(y-k)^2=r^2\\), center \\((h,k)\\), radius \\(r\\).`,
      `This comes directly from the distance formula: every point on the circle is exactly \\(r\\) away from the center.`,
      `<strong>General form</strong> \\(x^2+y^2+Dx+Ey+F=0\\) converts to standard form by <strong>completing the square</strong> in \\(x\\) and in \\(y\\) separately.`,
      `To graph a circle: plot the center, then move \\(r\\) units up, down, left, and right to sketch four points on the circle.`,
      `To test a point: compute \\((x-h)^2+(y-k)^2\\) and compare to \\(r^2\\) — less than means inside, equal means on the circle, greater than means outside.`,
    ],
    examples: [
      {
        h: "Writing an equation from center and radius",
        p: "Write the equation of the circle with center \\((3,-2)\\) and radius \\(5\\).",
        steps: [
          `<strong>Step 1 — Substitute into standard form:</strong> \\((x-3)^2+(y-(-2))^2=5^2\\).`,
          `<strong>Step 2 — Simplify:</strong> \\((x-3)^2+(y+2)^2=25\\).`,
        ],
      },
      {
        h: "Reading center and radius from an equation",
        p: "Find the center and radius of \\((x+1)^2+(y-4)^2=49\\).",
        steps: [
          `<strong>Step 1 — Match to standard form:</strong> \\((x-(-1))^2+(y-4)^2=7^2\\).`,
          `<strong>Step 2 — Read off center and radius:</strong> center \\((-1,4)\\), radius \\(7\\).`,
        ],
      },
      {
        h: "Writing an equation from the center and a point",
        p: "Write the equation of the circle centered at the origin that passes through \\((6,8)\\).",
        steps: [
          `<strong>Step 1 — Find the radius with the distance formula:</strong> \\(r=\\sqrt{6^2+8^2}=\\sqrt{100}=10\\).`,
          `<strong>Step 2 — Write the equation:</strong> \\(x^2+y^2=100\\).`,
        ],
      },
      {
        h: "Completing the square to find center and radius",
        p: "Rewrite \\(x^2+y^2-6x+4y-12=0\\) in standard form, then find its center and radius.",
        steps: [
          `<strong>Step 1 — Group and move the constant:</strong> \\((x^2-6x)+(y^2+4y)=12\\).`,
          `<strong>Step 2 — Complete the square in \\(x\\):</strong> \\(x^2-6x+9=(x-3)^2\\), adding \\(9\\) to both sides.`,
          `<strong>Step 3 — Complete the square in \\(y\\):</strong> \\(y^2+4y+4=(y+2)^2\\), adding \\(4\\) to both sides.`,
          `<strong>Step 4 — Combine:</strong> \\(12+9+4=25\\), so \\((x-3)^2+(y+2)^2=25\\): center \\((3,-2)\\), radius \\(5\\).`,
        ],
      },
      {
        h: "Testing a point's position relative to a circle",
        p: "Is the point \\((2,2)\\) inside, on, or outside the circle \\((x-1)^2+(y-1)^2=4\\)?",
        steps: [
          `<strong>Step 1 — Substitute the point:</strong> \\((2-1)^2+(2-1)^2=1^2+1^2\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(1+1=2\\).`,
          `<strong>Step 3 — Compare to \\(r^2=4\\):</strong> since \\(2<4\\), the point is inside the circle.`,
        ],
      },
    ],
    practice: [
      { q: "Write the equation of the circle with center \\((-4,5)\\) and radius \\(3\\).", a: "\\((x+4)^2+(y-5)^2=9\\)." },
      { q: "Find the center and radius of \\((x-6)^2+(y+2)^2=81\\).", a: "Center \\((6,-2)\\), radius \\(9\\)." },
      { q: "Write the equation of the circle centered at the origin passing through \\((-5,12)\\).", a: "\\(r=\\sqrt{5^2+12^2}=13\\); equation \\(x^2+y^2=169\\)." },
      { q: "Rewrite \\(x^2+y^2+8x-2y+8=0\\) in standard form. Find the center and radius.", a: "\\((x^2+8x+16)+(y^2-2y+1)=-8+16+1=9\\), so \\((x+4)^2+(y-1)^2=9\\): center \\((-4,1)\\), radius \\(3\\)." },
      { q: "Is the point \\((5,3)\\) inside, on, or outside the circle \\((x-2)^2+(y+1)^2=36\\)?", a: "\\((5-2)^2+(3+1)^2=9+16=25<36\\), so the point is inside the circle." },
    ],
    qa: [
      { q: "Why does the circle's equation use squared terms?", a: "It comes from the distance formula (point to center equals \\(r\\)) with both sides squared, avoiding a square root in the equation." },
      { q: "What if, after completing the square, the right side of the equation is negative?", a: "Then there's no real circle, since \\(r^2\\) can never be negative — the equation describes no actual graph. If the right side is exactly \\(0\\), the \"circle\" is really just a single point." },
      { q: "What information do I need to write a circle's equation?", a: "Either the center and radius directly, or the center plus any one point on the circle (using the distance formula to find \\(r\\)). Given three points on the circle (with no center or radius given), you could also solve for the equation, though that takes more algebra." },
      { q: "Does completing the square change the circle itself?", a: "No — it doesn't change the circle at all, just rewrites the same equation in the more useful center-radius form." },
      { q: "How do I quickly tell if a point is inside, on, or outside a circle?", a: "Substitute the point into \\((x-h)^2+(y-k)^2\\) and compare the result to \\(r^2\\): less than means inside, equal means on the circle, greater than means outside." },
    ],
  }),
]);

ch["9.5"] = L("9.5", "Arc Length and Sector Area (MA.912.GR.6.4)", [
  lessonHtml({
    title: "Arc Length & Sector Area",
    emoji: "🥧",
    overview: `A central angle \\(\\theta\\) claims a fraction \\(\\dfrac{\\theta}{360^\\circ}\\) of a full circle — and that same fraction applies to both the circle's circumference and its area. An <strong>arc length</strong> is that fraction of the full circumference; a <strong>sector area</strong> (the pie-slice region) is that fraction of the full area. Once you see both formulas as "fraction of the whole," solving for a missing angle or radius is just working the same proportion backward.`,
    toolkit: [
      `Full circle: circumference \\(C=2\\pi r\\); area \\(A=\\pi r^2\\).`,
      `<strong>Arc length</strong> for central angle \\(\\theta\\) (in degrees): \\(\\ell=\\dfrac{\\theta}{360^\\circ}\\cdot2\\pi r\\).`,
      `<strong>Sector area</strong> for central angle \\(\\theta\\) (in degrees): \\(A_{\\text{sector}}=\\dfrac{\\theta}{360^\\circ}\\cdot\\pi r^2\\).`,
      `Both formulas rely on the same idea — the fraction \\(\\dfrac{\\theta}{360^\\circ}\\) of the whole circle that the central angle "claims."`,
      `To solve for \\(\\theta\\) or \\(r\\) given an arc length or sector area, plug into the matching formula and solve algebraically.`,
    ],
    examples: [
      {
        h: "Finding arc length",
        p: "A circle has radius 9. Find the arc length for a central angle of \\(60^\\circ\\).",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(\\ell=\\dfrac{60}{360}\\cdot2\\pi(9)\\).`,
          `<strong>Step 2 — Simplify the fraction:</strong> \\(\\dfrac{60}{360}=\\dfrac16\\).`,
          `<strong>Step 3 — Multiply:</strong> \\(\\ell=\\dfrac16(18\\pi)=3\\pi\\).`,
        ],
      },
      {
        h: "Finding sector area",
        p: "A circle has radius 12. Find the sector area for a central angle of \\(90^\\circ\\).",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(A_{\\text{sector}}=\\dfrac{90}{360}\\cdot\\pi(12)^2\\).`,
          `<strong>Step 2 — Simplify the fraction:</strong> \\(\\dfrac{90}{360}=\\dfrac14\\).`,
          `<strong>Step 3 — Multiply:</strong> \\(A_{\\text{sector}}=\\dfrac14(144\\pi)=36\\pi\\).`,
        ],
      },
      {
        h: "Solving for the central angle from arc length",
        p: "A circle has radius 8, and an arc length of \\(4\\pi\\). Find the central angle \\(\\theta\\).",
        steps: [
          `<strong>Step 1 — Set up the formula:</strong> \\(4\\pi=\\dfrac{\\theta}{360}\\cdot2\\pi(8)=\\dfrac{\\theta}{360}\\cdot16\\pi\\).`,
          `<strong>Step 2 — Isolate the fraction:</strong> \\(\\dfrac{4\\pi}{16\\pi}=\\dfrac{\\theta}{360} \\Rightarrow \\dfrac14=\\dfrac{\\theta}{360}\\).`,
          `<strong>Step 3 — Solve for \\(\\theta\\):</strong> \\(\\theta=90^\\circ\\).`,
        ],
      },
      {
        h: "Solving for the radius from sector area",
        p: "A sector has area \\(24\\pi\\) and central angle \\(120^\\circ\\). Find the radius.",
        steps: [
          `<strong>Step 1 — Set up the formula:</strong> \\(24\\pi=\\dfrac{120}{360}\\cdot\\pi r^2=\\dfrac13\\pi r^2\\).`,
          `<strong>Step 2 — Isolate \\(r^2\\):</strong> \\(72=r^2\\).`,
          `<strong>Step 3 — Solve for \\(r\\):</strong> \\(r=\\sqrt{72}=6\\sqrt2\\).`,
        ],
      },
      {
        h: "A real-world sector problem",
        p: "A pizza slice has a radius of 7 in and a central angle of \\(45^\\circ\\). Find the length of its crust (the arc) and its area.",
        steps: [
          `<strong>Step 1 — Find the arc length:</strong> \\(\\ell=\\dfrac{45}{360}\\cdot2\\pi(7)=\\dfrac18(14\\pi)=1.75\\pi\\approx5.5\\) in.`,
          `<strong>Step 2 — Find the sector area:</strong> \\(A=\\dfrac{45}{360}\\cdot\\pi(7)^2=\\dfrac18(49\\pi)=6.125\\pi\\approx19.2\\) in\\(^2\\).`,
        ],
      },
    ],
    practice: [
      { q: "A circle has radius 6. Find the arc length for a central angle of \\(120^\\circ\\).", a: "\\(\\dfrac{120}{360}(12\\pi)=\\dfrac13(12\\pi)=4\\pi\\)." },
      { q: "A circle has radius 10. Find the sector area for a central angle of \\(72^\\circ\\).", a: "\\(\\dfrac{72}{360}(100\\pi)=\\dfrac15(100\\pi)=20\\pi\\)." },
      { q: "A circle has radius 15 and an arc length of \\(5\\pi\\). Find the central angle.", a: "\\(5\\pi=\\dfrac{\\theta}{360}(30\\pi) \\Rightarrow \\dfrac{\\theta}{360}=\\dfrac16 \\Rightarrow \\theta=60^\\circ\\)." },
      { q: "A sector has area \\(27\\pi\\) and central angle \\(270^\\circ\\). Find the radius.", a: "\\(27\\pi=\\dfrac{270}{360}\\pi r^2=\\dfrac34\\pi r^2 \\Rightarrow r^2=36 \\Rightarrow r=6\\)." },
      { q: "A circle has radius 4 and central angle \\(150^\\circ\\). Find the arc length and the sector area.", a: "Arc length \\(=\\dfrac{150}{360}(8\\pi)=\\dfrac{10\\pi}{3}\\); sector area \\(=\\dfrac{150}{360}(16\\pi)=\\dfrac{20\\pi}{3}\\)." },
    ],
    qa: [
      { q: "How is arc length related to circumference?", a: "Arc length is simply a fraction of the full circumference — the fraction \\(\\dfrac{\\theta}{360^\\circ}\\) that the central angle claims out of the full circle." },
      { q: "Do these formulas change if \\(\\theta\\) is given in radians?", a: "Yes, but they simplify: arc length \\(=r\\theta\\) and sector area \\(=\\dfrac12r^2\\theta\\) when \\(\\theta\\) is in radians, since a full circle is \\(2\\pi\\) radians instead of \\(360^\\circ\\)." },
      { q: "What's the difference between arc measure and arc length?", a: "Arc measure is in degrees, matching the central angle, and is independent of the circle's size. Arc length is an actual distance, which also depends on the radius." },
      { q: "Do these formulas work for a semicircle?", a: "Yes — a semicircle is just the \\(\\theta=180^\\circ\\) case, giving exactly half the circumference for arc length and half the circle's area for sector area." },
      { q: "How do I solve for the radius when given the sector area and the angle?", a: "Set up the sector-area proportion, isolate \\(r^2\\) algebraically, then take the square root to find \\(r\\)." },
    ],
  }),
]);

ch["9.6"] = L("9.6", "Triangles and Quadrilaterals Inscribed in Circles (MA.912.GR.6.3)", [
  lessonHtml({
    title: "Inscribed Polygons",
    emoji: "🔷",
    overview: `A polygon is <strong>inscribed</strong> in a circle (or <strong>cyclic</strong>) when every one of its vertices lies on the circle. Every inscribed polygon's angles are inscribed angles, so the Inscribed Angle Theorem from Lesson 9.2 governs them all. For a cyclic quadrilateral, this leads to a clean and useful rule: opposite angles are always supplementary. For a triangle inscribed with one side as a diameter, it forces a right angle — Thales' Theorem in action once again.`,
    toolkit: [
      `A polygon is <strong>inscribed</strong> (cyclic) in a circle when all its vertices lie on that circle.`,
      `<strong>Cyclic quadrilateral theorem:</strong> opposite angles are supplementary: \\(m\\angle A+m\\angle C=180^\\circ\\), \\(m\\angle B+m\\angle D=180^\\circ\\).`,
      `A triangle inscribed with one side as a diameter has a right angle at the vertex opposite that diameter (Thales' Theorem).`,
      `Each angle of an inscribed polygon is an inscribed angle equal to half the arc it "sees" — the arc opposite that vertex.`,
      `The arcs cut off by a cyclic quadrilateral's four sides always add to \\(360^\\circ\\), the whole circle.`,
    ],
    examples: [
      {
        h: "Opposite angles of a cyclic quadrilateral",
        p: "Cyclic quadrilateral \\(ABCD\\) has \\(m\\angle A=85^\\circ\\). Find \\(m\\angle C\\).",
        steps: [
          `<strong>Step 1 — Use the theorem:</strong> opposite angles are supplementary: \\(m\\angle A+m\\angle C=180^\\circ\\).`,
          `<strong>Step 2 — Solve:</strong> \\(m\\angle C=180^\\circ-85^\\circ=95^\\circ\\).`,
        ],
      },
      {
        h: "Solving for x with opposite angles",
        p: "Cyclic quadrilateral \\(ABCD\\) has \\(m\\angle B=(3x+10)^\\circ\\) and \\(m\\angle D=(2x+30)^\\circ\\). Find \\(x\\) and both angles.",
        steps: [
          `<strong>Step 1 — Set up the equation:</strong> \\((3x+10)+(2x+30)=180\\).`,
          `<strong>Step 2 — Solve:</strong> \\(5x+40=180 \\Rightarrow 5x=140 \\Rightarrow x=28\\).`,
          `<strong>Step 3 — Find the angles:</strong> \\(m\\angle B=3(28)+10=94^\\circ\\), \\(m\\angle D=2(28)+30=86^\\circ\\).`,
        ],
        check: "\\(94^\\circ+86^\\circ=180^\\circ\\). ✓",
      },
      {
        h: "Right angle from an inscribed diameter",
        p: "Triangle \\(ABC\\) is inscribed in a circle with \\(\\overline{AC}\\) as a diameter. \\(m\\angle A=40^\\circ\\). Find \\(m\\angle C\\).",
        steps: [
          `<strong>Step 1 — Apply Thales' Theorem:</strong> the angle opposite the diameter, \\(\\angle B\\), is \\(90^\\circ\\).`,
          `<strong>Step 2 — Use the Triangle Angle-Sum Theorem:</strong> \\(m\\angle C=180^\\circ-90^\\circ-40^\\circ\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(m\\angle C=50^\\circ\\).`,
        ],
      },
      {
        h: "Combining arcs and inscribed angles in a cyclic quadrilateral",
        p: "Cyclic quadrilateral \\(ABCD\\) has arcs \\(m\\widehat{AB}=80^\\circ\\), \\(m\\widehat{BC}=95^\\circ\\), \\(m\\widehat{CD}=x\\), \\(m\\widehat{DA}=110^\\circ\\). Find \\(x\\), then find \\(m\\angle B\\), the inscribed angle at vertex \\(B\\).",
        steps: [
          `<strong>Step 1 — Use the fact that all four arcs sum to \\(360^\\circ\\):</strong> \\(80+95+x+110=360 \\Rightarrow x=75^\\circ\\).`,
          `<strong>Step 2 — Identify what \\(\\angle B\\) intercepts:</strong> \\(\\angle B\\) is formed by chords \\(\\overline{BA}\\) and \\(\\overline{BC}\\), so it intercepts the arc from \\(A\\) to \\(C\\) that does <em>not</em> contain \\(B\\) — that's arc \\(ADC=m\\widehat{AD}+m\\widehat{DC}=110^\\circ+75^\\circ=185^\\circ\\).`,
          `<strong>Step 3 — Apply the Inscribed Angle Theorem:</strong> \\(m\\angle B=\\dfrac12(185^\\circ)=92.5^\\circ\\).`,
        ],
        check: "Find \\(\\angle D\\) the same way: arc \\(ABC=80^\\circ+95^\\circ=175^\\circ\\), so \\(m\\angle D=87.5^\\circ\\). Then \\(92.5^\\circ+87.5^\\circ=180^\\circ\\), confirming the cyclic-quadrilateral theorem. ✓",
      },
      {
        h: "Testing whether a quadrilateral can be cyclic",
        p: "A quadrilateral has \\(m\\angle A=70^\\circ\\) and \\(m\\angle C=100^\\circ\\) (opposite angles). Could this quadrilateral be inscribed in a circle?",
        steps: [
          `<strong>Step 1 — Check the cyclic-quadrilateral condition:</strong> opposite angles must sum to \\(180^\\circ\\).`,
          `<strong>Step 2 — Add:</strong> \\(70^\\circ+100^\\circ=170^\\circ\\neq180^\\circ\\).`,
        ],
        check: "No — since the opposite angles don't sum to \\(180^\\circ\\), this quadrilateral cannot be inscribed in a single circle.",
      },
    ],
    practice: [
      { q: "Cyclic quadrilateral has \\(m\\angle A=112^\\circ\\). Find \\(m\\angle C\\).", a: "\\(180^\\circ-112^\\circ=68^\\circ\\)." },
      { q: "Cyclic quadrilateral has \\(m\\angle B=4x\\) and \\(m\\angle D=2x+30\\) (opposite angles). Find \\(x\\), \\(m\\angle B\\), and \\(m\\angle D\\).", a: "\\(4x+2x+30=180 \\Rightarrow 6x=150 \\Rightarrow x=25\\). \\(m\\angle B=100^\\circ\\), \\(m\\angle D=80^\\circ\\)." },
      { q: "A right triangle is inscribed with a diameter as one side. The other two angles are \\(3x\\) and \\(2x\\). Find \\(x\\) and both angles.", a: "The third angle is \\(90^\\circ\\), so \\(3x+2x=90^\\circ \\Rightarrow 5x=90^\\circ \\Rightarrow x=18^\\circ\\). Angles: \\(54^\\circ\\) and \\(36^\\circ\\)." },
      { q: "Cyclic quadrilateral has arcs \\(m\\widehat{AB}=70^\\circ\\), \\(m\\widehat{BC}=100^\\circ\\), \\(m\\widehat{CD}=85^\\circ\\), \\(m\\widehat{DA}=x\\). Find \\(x\\), then find \\(m\\angle A\\) (which intercepts arc \\(BCD\\)).", a: "\\(70+100+85+x=360 \\Rightarrow x=105^\\circ\\). Arc \\(BCD=100^\\circ+85^\\circ=185^\\circ\\), so \\(m\\angle A=\\dfrac12(185^\\circ)=92.5^\\circ\\)." },
      { q: "A quadrilateral has \\(m\\angle A=95^\\circ\\) and \\(m\\angle C=85^\\circ\\) (opposite angles). Could it be inscribed in a circle?", a: "Yes — since \\(95^\\circ+85^\\circ=180^\\circ\\), the opposite angles satisfy the cyclic-quadrilateral condition." },
    ],
    qa: [
      { q: "What does it mean for a polygon to be \"inscribed\" or \"cyclic\"?", a: "Every one of its vertices lies on the circle." },
      { q: "Why must opposite angles of a cyclic quadrilateral be supplementary?", a: "Each angle is an inscribed angle equal to half the arc it \"sees\" on the far side of the circle. The two opposite angles together see the entire circle's arcs (\\(360^\\circ\\)), so half of that total, split between them, is \\(180^\\circ\\)." },
      { q: "Can every triangle be inscribed in some circle?", a: "Yes — every triangle has a unique circumscribed circle, through its circumcenter. What's special in this lesson is specifically when one side of the inscribed triangle is a diameter, which forces a right angle at the opposite vertex." },
      { q: "Can the cyclic-quadrilateral test prove a quadrilateral is NOT cyclic?", a: "Yes — if a pair of opposite angles doesn't sum to \\(180^\\circ\\), the quadrilateral cannot be inscribed in a single circle, no matter how the vertices are otherwise arranged." },
      { q: "Do all four arcs of an inscribed quadrilateral always add up to \\(360^\\circ\\)?", a: "Yes, always — the four arcs between consecutive vertices make up the entire circle, with no gaps or overlaps." },
    ],
  }),
]);
