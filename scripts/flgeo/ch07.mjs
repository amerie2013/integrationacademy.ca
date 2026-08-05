import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

ch["7.1"] = L("7.1", "Interior and Exterior Angle Sums of Polygons (MA.912.GR.1.1)", [
  lessonHtml({
    title: "Angle Sums of Polygons",
    emoji: "⬠",
    overview: `Every convex polygon's interior angles add up to a fixed total that depends only on its number of sides \\(n\\) — you can find this total by splitting the polygon into triangles fanned out from one vertex. A <strong>regular</strong> polygon (all sides and angles congruent) then splits that total evenly among its \\(n\\) vertices. Meanwhile the <strong>exterior</strong> angles, one at each vertex, always add to exactly \\(360^\\circ\\) no matter how many sides the polygon has — walking all the way around any convex polygon turns you through one full rotation.`,
    toolkit: [
      `<strong>Interior angle sum:</strong> \\(S=(n-2)\\cdot180^\\circ\\), because any convex \\(n\\)-gon can be split into \\(n-2\\) triangles from a single vertex, and each triangle contributes \\(180^\\circ\\).`,
      `<strong>Each interior angle of a regular \\(n\\)-gon:</strong> \\(\\dfrac{(n-2)\\cdot180^\\circ}{n}\\).`,
      `<strong>Exterior angle sum:</strong> taking one exterior angle per vertex, the total is always \\(360^\\circ\\) for any convex polygon — regardless of \\(n\\).`,
      `<strong>Each exterior angle of a regular \\(n\\)-gon:</strong> \\(\\dfrac{360^\\circ}{n}\\).`,
      `At any single vertex, the interior and exterior angles form a <strong>linear pair</strong>: \\(\\text{interior}+\\text{exterior}=180^\\circ\\).`,
    ],
    examples: [
      {
        h: "Interior angle sum of a hexagon",
        p: "Find the sum of the interior angles of a convex hexagon (\\(n=6\\)).",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(S=(n-2)\\cdot180^\\circ=(6-2)\\cdot180^\\circ\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(S=4\\cdot180^\\circ=720^\\circ\\).`,
        ],
        check: "A hexagon splits into 4 triangles fanned from one vertex, and \\(4\\times180^\\circ=720^\\circ\\). ✓",
      },
      {
        h: "Each interior angle of a regular polygon",
        p: "Find the measure of each interior angle of a regular octagon (\\(n=8\\)).",
        steps: [
          `<strong>Step 1 — Find the total sum:</strong> \\(S=(8-2)\\cdot180^\\circ=1080^\\circ\\).`,
          `<strong>Step 2 — Divide evenly among the 8 vertices:</strong> \\(\\dfrac{1080^\\circ}{8}=135^\\circ\\).`,
        ],
        check: "Since a regular octagon is equiangular, all 8 angles must be equal, so dividing the total by 8 gives each one.",
      },
      {
        h: "Finding n from the interior angle sum",
        p: "The interior angles of a convex polygon sum to \\(1440^\\circ\\). How many sides does it have?",
        steps: [
          `<strong>Step 1 — Set up the equation:</strong> \\((n-2)\\cdot180^\\circ=1440^\\circ\\).`,
          `<strong>Step 2 — Solve for \\(n\\):</strong> \\(n-2=\\dfrac{1440}{180}=8\\), so \\(n=10\\).`,
        ],
        check: "Check: \\((10-2)\\cdot180^\\circ=8\\cdot180^\\circ=1440^\\circ\\). ✓",
      },
      {
        h: "Each exterior angle of a regular polygon",
        p: "A regular polygon has 15 sides. Find each exterior angle, then use it to confirm each interior angle.",
        steps: [
          `<strong>Step 1 — Exterior angle:</strong> \\(\\dfrac{360^\\circ}{15}=24^\\circ\\).`,
          `<strong>Step 2 — Interior angle from the linear pair:</strong> \\(180^\\circ-24^\\circ=156^\\circ\\).`,
        ],
        check: "Cross-check with the interior formula: \\(\\dfrac{(15-2)\\cdot180^\\circ}{15}=\\dfrac{2340^\\circ}{15}=156^\\circ\\). ✓",
      },
      {
        h: "Missing interior angle of an irregular polygon",
        p: "A pentagon has interior angles \\(100^\\circ\\), \\(110^\\circ\\), \\(95^\\circ\\), \\(120^\\circ\\), and \\(x\\). Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Find the total sum for a pentagon:</strong> \\(S=(5-2)\\cdot180^\\circ=540^\\circ\\).`,
          `<strong>Step 2 — Add the known angles:</strong> \\(100^\\circ+110^\\circ+95^\\circ+120^\\circ=425^\\circ\\).`,
          `<strong>Step 3 — Subtract to find \\(x\\):</strong> \\(x=540^\\circ-425^\\circ=115^\\circ\\).`,
        ],
        check: "This works for any convex pentagon — regular or not — because the sum formula only depends on \\(n\\).",
      },
    ],
    practice: [
      { q: "Find the sum of the interior angles of a convex nonagon (\\(n=9\\)).", a: "\\(S=(9-2)\\cdot180^\\circ=1260^\\circ\\)." },
      { q: "Find each interior angle of a regular decagon (\\(n=10\\)).", a: "\\(S=(10-2)\\cdot180^\\circ=1440^\\circ\\); each angle \\(=\\dfrac{1440^\\circ}{10}=144^\\circ\\)." },
      { q: "A convex polygon's interior angles sum to \\(2340^\\circ\\). Find \\(n\\).", a: "\\((n-2)\\cdot180^\\circ=2340^\\circ \\Rightarrow n-2=13 \\Rightarrow n=15\\)." },
      { q: "Find each exterior angle of a regular 20-gon.", a: "\\(\\dfrac{360^\\circ}{20}=18^\\circ\\)." },
      { q: "A quadrilateral has angles \\(3x\\), \\(2x\\), \\(4x\\), and \\(x\\). Find \\(x\\) and the largest angle.", a: "Sum \\(=(4-2)\\cdot180^\\circ=360^\\circ\\), so \\(10x=360^\\circ \\Rightarrow x=36^\\circ\\). Largest angle \\(=4x=144^\\circ\\)." },
    ],
    qa: [
      { q: "Why does the formula \\(S=(n-2)\\cdot180^\\circ\\) work?", a: "Any convex polygon can be divided into \\(n-2\\) non-overlapping triangles by drawing every diagonal from one vertex, and each triangle contributes \\(180^\\circ\\) to the total." },
      { q: "Does the exterior angle sum ever change for polygons with more sides?", a: "No — it's always \\(360^\\circ\\) for any convex polygon. Walking around the boundary once, turning by each exterior angle in turn, brings you through exactly one full rotation." },
      { q: "Does the interior angle sum formula only apply to regular polygons?", a: "No — \\(S=(n-2)\\cdot180^\\circ\\) gives the total for any convex polygon, regular or irregular. Dividing that total by \\(n\\) to get \"each angle\" is only valid when the polygon is regular." },
      { q: "How are the interior and exterior angles related at one vertex?", a: "They form a linear pair, so they always add to \\(180^\\circ\\) — knowing one instantly gives you the other." },
      { q: "What happens if the polygon is concave?", a: "The total interior sum formula still holds, but a concave polygon has at least one reflex interior angle (greater than \\(180^\\circ\\)), which complicates finding individual angles and the simple exterior-angle-sum reasoning." },
    ],
  }),
]);

ch["7.2"] = L("7.2", "Properties of Parallelograms and Proving Theorems (MA.912.GR.1.4)", [
  lessonHtml({
    title: "Parallelograms",
    emoji: "▱",
    overview: `A <strong>parallelogram</strong> is a quadrilateral with both pairs of opposite sides parallel — that single definition forces an entire family of properties. Draw one diagonal and you split the parallelogram into two triangles congruent by ASA (using alternate interior angles from the parallel sides), and their corresponding parts hand you congruent opposite sides, congruent opposite angles, supplementary consecutive angles, and diagonals that bisect each other. Each property also has a useful <strong>converse</strong> — proving just one of them true for a quadrilateral is enough to prove it's a parallelogram in the first place.`,
    toolkit: [
      `<strong>Opposite sides</strong> are parallel and congruent: \\(\\overline{AB}\\parallel\\overline{CD}\\), \\(\\overline{AB}\\cong\\overline{CD}\\) (and likewise for the other pair).`,
      `<strong>Opposite angles</strong> are congruent: \\(\\angle A\\cong\\angle C\\), \\(\\angle B\\cong\\angle D\\).`,
      `<strong>Consecutive angles</strong> are supplementary: \\(m\\angle A+m\\angle B=180^\\circ\\), since they're co-interior angles along a transversal cutting the parallel sides.`,
      `<strong>Diagonals bisect each other</strong> — they cross at a point that is the midpoint of both diagonals.`,
      `Each property above has a valid <strong>converse</strong>: if a quadrilateral satisfies just one of them (opposite sides both congruent, opposite angles both congruent, diagonals bisecting each other, or one pair of sides both parallel <em>and</em> congruent), then it must be a parallelogram.`,
    ],
    examples: [
      {
        h: "Solving for a side using congruent opposite sides",
        p: "In parallelogram \\(ABCD\\), \\(AB=3x+2\\) and \\(CD=17\\). Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> opposite sides of a parallelogram are congruent, so \\(AB=CD\\): \\(3x+2=17\\).`,
          `<strong>Step 2 — Solve:</strong> \\(3x=15 \\Rightarrow x=5\\).`,
        ],
        check: "\\(AB=3(5)+2=17=CD\\). ✓",
      },
      {
        h: "Solving for x using congruent opposite angles",
        p: "In parallelogram \\(ABCD\\), \\(m\\angle A=2x+10\\) and \\(m\\angle C=3x-5\\). Find \\(x\\) and \\(m\\angle A\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> opposite angles are congruent, so \\(m\\angle A=m\\angle C\\): \\(2x+10=3x-5\\).`,
          `<strong>Step 2 — Solve for \\(x\\):</strong> \\(15=x\\).`,
          `<strong>Step 3 — Find the angle:</strong> \\(m\\angle A=2(15)+10=40^\\circ\\).`,
        ],
        check: "\\(m\\angle C=3(15)-5=40^\\circ\\), matching \\(m\\angle A\\). ✓",
      },
      {
        h: "Solving for x using consecutive angles",
        p: "In parallelogram \\(ABCD\\), \\(m\\angle A=(2x+10)^\\circ\\) and \\(m\\angle B=(3x+20)^\\circ\\) are consecutive angles. Find \\(x\\), \\(m\\angle A\\), and \\(m\\angle B\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> consecutive angles are supplementary: \\((2x+10)+(3x+20)=180\\).`,
          `<strong>Step 2 — Solve:</strong> \\(5x+30=180 \\Rightarrow 5x=150 \\Rightarrow x=30\\).`,
          `<strong>Step 3 — Find the angles:</strong> \\(m\\angle A=2(30)+10=70^\\circ\\), \\(m\\angle B=3(30)+20=110^\\circ\\).`,
        ],
        check: "\\(70^\\circ+110^\\circ=180^\\circ\\). ✓",
      },
      {
        h: "Using the diagonals to solve for x",
        p: "In parallelogram \\(ABCD\\), diagonals \\(\\overline{AC}\\) and \\(\\overline{BD}\\) intersect at \\(E\\). If \\(AE=2x-3\\) and \\(EC=x+9\\), find \\(x\\) and the full length of \\(\\overline{AC}\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> the diagonals bisect each other, so \\(AE=EC\\): \\(2x-3=x+9\\).`,
          `<strong>Step 2 — Solve for \\(x\\):</strong> \\(x=12\\).`,
          `<strong>Step 3 — Find \\(AC\\):</strong> \\(AE=2(12)-3=21\\), so \\(AC=2(AE)=42\\).`,
        ],
        check: "\\(EC=12+9=21=AE\\), confirming \\(E\\) really is the midpoint of \\(\\overline{AC}\\). ✓",
      },
      {
        h: "Proving a quadrilateral is a parallelogram",
        p: "<strong>Given:</strong> quadrilateral \\(WXYZ\\) with diagonals \\(\\overline{WY}\\) and \\(\\overline{XZ}\\) intersecting at \\(P\\), such that \\(\\overline{WP}\\cong\\overline{PY}\\) and \\(\\overline{XP}\\cong\\overline{PZ}\\). <strong>Prove:</strong> \\(WXYZ\\) is a parallelogram.",
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(\\overline{WP}\\cong\\overline{PY}\\) and \\(\\overline{XP}\\cong\\overline{PZ}\\). <strong>Reason:</strong> Given.`,
          `<strong>Step 2 — Statement:</strong> \\(\\angle WPX\\cong\\angle YPZ\\) and \\(\\angle XPY\\cong\\angle ZPW\\). <strong>Reason:</strong> Vertical Angles Theorem.`,
          `<strong>Step 3 — Statement:</strong> \\(\\triangle WPX\\cong\\triangle YPZ\\) and \\(\\triangle XPY\\cong\\triangle ZPW\\). <strong>Reason:</strong> SAS Congruence.`,
          `<strong>Step 4 — Statement:</strong> \\(\\overline{WX}\\cong\\overline{YZ}\\) and \\(\\overline{XY}\\cong\\overline{ZW}\\). <strong>Reason:</strong> CPCTC.`,
          `<strong>Conclusion:</strong> \\(WXYZ\\) has both pairs of opposite sides congruent, so it is a parallelogram (converse theorem).`,
        ],
        check: "This is exactly why \"diagonals bisect each other\" is on the converse list — it's provable from SAS and CPCTC alone.",
      },
    ],
    practice: [
      { q: "In parallelogram \\(ABCD\\), \\(AB=4x-1\\) and \\(CD=15\\). Find \\(x\\).", a: "\\(4x-1=15 \\Rightarrow 4x=16 \\Rightarrow x=4\\)." },
      { q: "In parallelogram \\(ABCD\\), \\(m\\angle B=70^\\circ\\). Find \\(m\\angle D\\) (opposite) and \\(m\\angle A\\) (consecutive).", a: "\\(m\\angle D=70^\\circ\\) (opposite angles congruent); \\(m\\angle A=180^\\circ-70^\\circ=110^\\circ\\) (consecutive angles supplementary)." },
      { q: "Diagonals of parallelogram \\(ABCD\\) meet at \\(E\\), with \\(BE=3x+1\\) and \\(ED=5x-9\\). Find \\(x\\) and \\(BD\\).", a: "\\(3x+1=5x-9 \\Rightarrow 10=2x \\Rightarrow x=5\\). \\(BE=16\\), so \\(BD=2(16)=32\\)." },
      { q: "In parallelogram \\(ABCD\\), consecutive angles measure \\(m\\angle A=(2x+30)^\\circ\\) and \\(m\\angle B=(3x+20)^\\circ\\). Find \\(x\\) and both angle measures.", a: "\\((2x+30)+(3x+20)=180 \\Rightarrow 5x+50=180 \\Rightarrow x=26\\). \\(m\\angle A=2(26)+30=82^\\circ\\), \\(m\\angle B=3(26)+20=98^\\circ\\)." },
      { q: "Which converse theorem would let you prove quadrilateral \\(WXYZ\\) is a parallelogram if you only know its diagonals bisect each other?", a: "The converse: if the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram — no other information is needed." },
    ],
    qa: [
      { q: "What's the minimal definition of a parallelogram?", a: "A quadrilateral with both pairs of opposite sides parallel — every other property is a consequence of that one definition." },
      { q: "Do I need to check all four properties to prove a quadrilateral is a parallelogram?", a: "No — proving just one converse condition is enough, such as both pairs of opposite sides congruent, or diagonals bisecting each other, or one pair of sides both parallel and congruent." },
      { q: "Why are consecutive angles supplementary instead of congruent?", a: "Consecutive angles lie along the same pair of parallel sides, cut by the connecting side acting as a transversal — that makes them co-interior (same-side interior) angles, which are always supplementary when the lines are parallel." },
      { q: "How do diagonals help prove the other parallelogram properties?", a: "Drawing one diagonal splits the parallelogram into two triangles that are congruent by ASA (using the parallel sides' alternate interior angles and the shared diagonal), and CPCTC then hands you the congruent opposite sides and angles." },
      { q: "If I only know one pair of opposite sides is both parallel and congruent, is that enough?", a: "Yes — that combination (parallel <em>and</em> congruent, for just one pair) is itself one of the valid converse conditions for proving a parallelogram." },
    ],
  }),
]);

ch["7.3"] = L("7.3", "Properties of Rectangles, Rhombi, and Squares (MA.912.GR.1.4)", [
  lessonHtml({
    title: "Rectangles, Rhombi & Squares",
    emoji: "▭",
    overview: `Rectangles, rhombi, and squares are all special parallelograms, so they inherit every parallelogram property from Lesson 7.2 — plus extras of their own. A <strong>rectangle</strong> adds four right angles and congruent diagonals. A <strong>rhombus</strong> adds four congruent sides and diagonals that are perpendicular and bisect the vertex angles. A <strong>square</strong> is both at once, sitting at the bottom of the quadrilateral hierarchy: every square is a rectangle <em>and</em> a rhombus, but not every rectangle or rhombus is a square.`,
    toolkit: [
      `<strong>Rectangle</strong> = parallelogram + four right angles. Its diagonals are <strong>congruent</strong> (in addition to still bisecting each other).`,
      `<strong>Rhombus</strong> = parallelogram + four congruent sides. Its diagonals are <strong>perpendicular</strong> and <strong>bisect the vertex angles</strong> (in addition to still bisecting each other).`,
      `<strong>Square</strong> = parallelogram that is both a rectangle and a rhombus: right angles, congruent sides, and perpendicular congruent diagonals, all at once.`,
      `<strong>Hierarchy:</strong> square \\(\\subset\\) rectangle \\(\\subset\\) parallelogram, and square \\(\\subset\\) rhombus \\(\\subset\\) parallelogram.`,
      `Because a rhombus's diagonals are perpendicular and bisect each other, they split it into four congruent right triangles — use the <strong>Pythagorean theorem</strong> with the half-diagonals as legs and a side as the hypotenuse.`,
    ],
    examples: [
      {
        h: "Congruent diagonals of a rectangle",
        p: "Rectangle \\(ABCD\\) has diagonals \\(AC=5x-3\\) and \\(BD=2x+9\\). Find \\(x\\) and the diagonal length.",
        steps: [
          `<strong>Step 1 — Use the property:</strong> a rectangle's diagonals are congruent: \\(5x-3=2x+9\\).`,
          `<strong>Step 2 — Solve:</strong> \\(3x=12 \\Rightarrow x=4\\).`,
          `<strong>Step 3 — Find the length:</strong> \\(AC=5(4)-3=17\\).`,
        ],
        check: "\\(BD=2(4)+9=17=AC\\). ✓",
      },
      {
        h: "Isosceles triangle formed by rectangle diagonals",
        p: "In rectangle \\(ABCD\\), the diagonals intersect at \\(E\\), and \\(\\angle DAC=32^\\circ\\) (the angle a diagonal makes with a side). Since a rectangle's diagonals are congruent and bisect each other, \\(\\triangle AED\\) is isosceles with \\(EA=ED\\). Find \\(m\\angle AED\\), the acute angle between the two diagonals.",
        steps: [
          `<strong>Step 1 — Identify the isosceles triangle's base angles:</strong> since \\(EA=ED\\), the base angles opposite them are congruent: \\(m\\angle EDA=m\\angle DAC=32^\\circ\\) (alternate interior angles also confirm \\(\\overline{AB}\\parallel\\overline{DC}\\) makes this consistent).`,
          `<strong>Step 2 — Use the Triangle Angle-Sum Theorem:</strong> \\(m\\angle AED=180^\\circ-32^\\circ-32^\\circ\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(m\\angle AED=116^\\circ\\).`,
        ],
        check: "The two angles the diagonals make at \\(E\\) (116° and its supplement 64°) always come from this same isosceles-triangle reasoning in a rectangle.",
      },
      {
        h: "Rhombus side length from its diagonals",
        p: "A rhombus has diagonals of length 16 and 12. Find the side length.",
        steps: [
          `<strong>Step 1 — Find the half-diagonals:</strong> the diagonals bisect each other, so the half-lengths are \\(8\\) and \\(6\\).`,
          `<strong>Step 2 — Apply the Pythagorean theorem:</strong> the half-diagonals are the legs of a right triangle whose hypotenuse is a side of the rhombus: \\(s=\\sqrt{8^2+6^2}\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(s=\\sqrt{64+36}=\\sqrt{100}=10\\).`,
        ],
        check: "8-6-10 is a multiple of the 4-3-5 Pythagorean triple. ✓",
      },
      {
        h: "Rhombus diagonal bisecting a vertex angle",
        p: "In rhombus \\(ABCD\\), \\(m\\angle DAB=70^\\circ\\). Diagonal \\(\\overline{AC}\\) bisects \\(\\angle DAB\\). Find \\(m\\angle DAC\\) and \\(m\\angle BAC\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> a rhombus's diagonal bisects the vertex angle it's drawn from, splitting it into two congruent halves.`,
          `<strong>Step 2 — Divide:</strong> \\(m\\angle DAC=m\\angle BAC=\\dfrac{70^\\circ}{2}=35^\\circ\\).`,
        ],
        check: "\\(35^\\circ+35^\\circ=70^\\circ=m\\angle DAB\\). ✓",
      },
      {
        h: "Square: diagonal to side length",
        p: "A square has a diagonal of length \\(10\\sqrt{2}\\). Find the side length and the perimeter.",
        steps: [
          `<strong>Step 1 — Recall the diagonal-side relationship:</strong> a square's diagonal satisfies \\(d=s\\sqrt{2}\\) (from the Pythagorean theorem on two sides).`,
          `<strong>Step 2 — Solve for \\(s\\):</strong> \\(10\\sqrt{2}=s\\sqrt{2} \\Rightarrow s=10\\).`,
          `<strong>Step 3 — Find the perimeter:</strong> \\(P=4s=4(10)=40\\).`,
        ],
        check: "Squaring back: a right triangle with legs 10 and 10 has hypotenuse \\(\\sqrt{200}=10\\sqrt{2}\\). ✓",
      },
    ],
    practice: [
      { q: "Rectangle diagonals: \\(AC=7x-2\\), \\(BD=3x+18\\). Find \\(x\\) and the diagonal length.", a: "\\(7x-2=3x+18 \\Rightarrow 4x=20 \\Rightarrow x=5\\). Diagonal \\(=7(5)-2=33\\)." },
      { q: "A rhombus has side length 13 and one diagonal of length 24. Find the other diagonal.", a: "Half of the known diagonal is 12. By the Pythagorean theorem, \\(13^2-12^2=169-144=25\\), so the other half is \\(\\sqrt{25}=5\\), and the full diagonal is \\(10\\)." },
      { q: "In rhombus \\(ABCD\\), \\(m\\angle B=130^\\circ\\) and diagonal \\(\\overline{BD}\\) bisects it. Find each half.", a: "\\(\\dfrac{130^\\circ}{2}=65^\\circ\\) each." },
      { q: "A square has perimeter 48. Find its diagonal length.", a: "Side \\(=\\dfrac{48}{4}=12\\); diagonal \\(=12\\sqrt{2}\\)." },
      { q: "A parallelogram has congruent diagonals but its sides are not all congruent. What shape must it be?", a: "A rectangle — congruent diagonals (without congruent sides) identify a rectangle that is not a rhombus or square." },
    ],
    qa: [
      { q: "How are these three shapes related to parallelograms?", a: "Rectangles, rhombi, and squares are all parallelograms with extra properties layered on top; the hierarchy is nested, with a square being both a rectangle and a rhombus simultaneously." },
      { q: "What's the fastest way to tell a rectangle from a rhombus using only the diagonals?", a: "If the diagonals are congruent, it's at least a rectangle. If they're perpendicular, it's at least a rhombus. If both are true, it's a square." },
      { q: "Do the diagonals of a rhombus bisect each other AND the vertex angles?", a: "Yes to both — bisecting each other comes from it being a parallelogram, while bisecting the vertex angles is an extra property that comes specifically from the four congruent sides." },
      { q: "Why can the Pythagorean theorem be used with a rhombus's diagonals?", a: "Because the diagonals are perpendicular and bisect each other, they cut the rhombus into four congruent right triangles whose legs are the half-diagonals and whose hypotenuse is a side of the rhombus." },
      { q: "Is every square a rhombus? Is every rhombus a square?", a: "Every square is a rhombus, since all four sides are congruent. But not every rhombus is a square — it's only a square if its angles are also all right angles." },
    ],
  }),
]);

ch["7.4"] = L("7.4", "Properties of Trapezoids and Kites (Including Midsegment Theorem) (MA.912.GR.1.5)", [
  lessonHtml({
    title: "Trapezoids & Kites",
    emoji: "🪁",
    overview: `A <strong>trapezoid</strong> has exactly one pair of parallel sides, called the <strong>bases</strong>; the other two sides are the <strong>legs</strong>. When the legs are congruent, the trapezoid is <strong>isosceles</strong> and picks up extra symmetry: congruent base angles and congruent diagonals. The <strong>midsegment</strong> connecting the midpoints of the two legs is always parallel to both bases, with a length exactly halfway between them. A <strong>kite</strong> is a different kind of quadrilateral entirely — two distinct pairs of <em>consecutive</em> congruent sides — and its diagonals are perpendicular, with one diagonal bisecting the other.`,
    toolkit: [
      `<strong>Trapezoid:</strong> exactly one pair of parallel sides (the bases \\(b_1,b_2\\)); the non-parallel sides are the legs.`,
      `<strong>Isosceles trapezoid</strong> (congruent legs): base angles are congruent at each base, and the diagonals are congruent.`,
      `<strong>Midsegment Theorem:</strong> the segment joining the midpoints of the legs is parallel to both bases, with length \\(m=\\dfrac{b_1+b_2}{2}\\) — the average of the two bases.`,
      `<strong>Kite:</strong> a quadrilateral with two distinct pairs of consecutive congruent sides (not a rhombus, where all four sides match).`,
      `<strong>Kite diagonals</strong> are perpendicular; the diagonal connecting the two vertices between the congruent side-pairs bisects the other diagonal and bisects the pair of angles at its own endpoints.`,
    ],
    examples: [
      {
        h: "Finding the midsegment length",
        p: "A trapezoid has bases of length 10 and 18. Find the midsegment length.",
        steps: [
          `<strong>Step 1 — Apply the Midsegment Theorem:</strong> \\(m=\\dfrac{b_1+b_2}{2}=\\dfrac{10+18}{2}\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(m=\\dfrac{28}{2}=14\\).`,
        ],
        check: "14 sits exactly halfway between 10 and 18. ✓",
      },
      {
        h: "Finding a missing base from the midsegment",
        p: "A trapezoid's midsegment is 15, and one base is 9. Find the other base.",
        steps: [
          `<strong>Step 1 — Set up the formula:</strong> \\(15=\\dfrac{9+b_2}{2}\\).`,
          `<strong>Step 2 — Solve:</strong> \\(30=9+b_2 \\Rightarrow b_2=21\\).`,
        ],
        check: "The average of 9 and 21 is \\(\\dfrac{30}{2}=15\\). ✓",
      },
      {
        h: "Base angles of an isosceles trapezoid",
        p: "Isosceles trapezoid \\(ABCD\\) has bases \\(\\overline{AB}\\) and \\(\\overline{DC}\\), with \\(m\\angle A=72^\\circ\\). Find \\(m\\angle B\\) (same base) and \\(m\\angle D\\) (same leg as \\(\\angle A\\)).",
        steps: [
          `<strong>Step 1 — Use the isosceles trapezoid property:</strong> base angles at the same base are congruent, so \\(m\\angle B=m\\angle A=72^\\circ\\).`,
          `<strong>Step 2 — Use the parallel bases:</strong> \\(\\angle A\\) and \\(\\angle D\\) lie along the same leg cutting two parallel lines, so they're supplementary (co-interior angles): \\(m\\angle D=180^\\circ-72^\\circ=108^\\circ\\).`,
        ],
        check: "By symmetry \\(m\\angle C=108^\\circ\\) too, and all four angles sum to \\(72+72+108+108=360^\\circ\\). ✓",
      },
      {
        h: "Kite side lengths from diagonal segments",
        p: "Kite \\(EFGH\\) has diagonal \\(\\overline{EG}\\) as its axis of symmetry, crossing diagonal \\(\\overline{FH}\\) at point \\(X\\) so that \\(FX=XH=8\\). If \\(EX=6\\) and \\(GX=15\\), find the kite's two distinct side lengths.",
        steps: [
          `<strong>Step 1 — Use perpendicularity:</strong> the axis diagonal \\(\\overline{EG}\\) is perpendicular to \\(\\overline{FH}\\), so \\(\\triangle EXF\\) and \\(\\triangle GXF\\) are right triangles.`,
          `<strong>Step 2 — Find \\(EF\\) (and \\(EH\\)):</strong> \\(EF=\\sqrt{EX^2+FX^2}=\\sqrt{6^2+8^2}=\\sqrt{100}=10\\).`,
          `<strong>Step 3 — Find \\(GF\\) (and \\(GH\\)):</strong> \\(GF=\\sqrt{GX^2+FX^2}=\\sqrt{15^2+8^2}=\\sqrt{289}=17\\).`,
        ],
        check: "The kite has two pairs of consecutive congruent sides: \\(EF=EH=10\\) and \\(GF=GH=17\\). ✓",
      },
      {
        h: "Solving for x with congruent diagonals",
        p: "Isosceles trapezoid \\(ABCD\\) has diagonals \\(AC=3x-4\\) and \\(BD=41\\). Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Use the property:</strong> an isosceles trapezoid's diagonals are congruent: \\(3x-4=41\\).`,
          `<strong>Step 2 — Solve:</strong> \\(3x=45 \\Rightarrow x=15\\).`,
        ],
        check: "\\(3(15)-4=41\\). ✓",
      },
    ],
    practice: [
      { q: "A trapezoid has bases 14 and 22. Find the midsegment length.", a: "\\(\\dfrac{14+22}{2}=18\\)." },
      { q: "A trapezoid's midsegment is 12 and one base is 7. Find the other base.", a: "\\(12=\\dfrac{7+b_2}{2} \\Rightarrow 24=7+b_2 \\Rightarrow b_2=17\\)." },
      { q: "In an isosceles trapezoid, one base angle measures \\(110^\\circ\\). Find the angle at the other base, on the same leg.", a: "Consecutive angles on the same leg between the parallel bases are supplementary: \\(180^\\circ-110^\\circ=70^\\circ\\)." },
      { q: "Kite \\(EFGH\\) has axis diagonal \\(\\overline{EG}\\) crossing \\(\\overline{FH}\\) at \\(X\\), with \\(FX=XH=12\\), \\(EX=5\\), and \\(GX=9\\). Find the two side lengths.", a: "\\(EF=\\sqrt{5^2+12^2}=\\sqrt{169}=13\\); \\(GF=\\sqrt{9^2+12^2}=\\sqrt{225}=15\\)." },
      { q: "Isosceles trapezoid diagonals are \\(5x-7\\) and \\(38\\). Find \\(x\\).", a: "\\(5x-7=38 \\Rightarrow 5x=45 \\Rightarrow x=9\\)." },
    ],
    qa: [
      { q: "Does every trapezoid have congruent diagonals?", a: "No — only isosceles trapezoids (with congruent legs) have congruent diagonals. A general (non-isosceles) trapezoid does not." },
      { q: "Are all four sides of a kite ever congruent?", a: "Only in the special case where the kite is also a rhombus — otherwise a kite has exactly two distinct side lengths, each appearing twice, consecutively." },
      { q: "Which diagonal of a kite is the perpendicular bisector of the other?", a: "The axis of symmetry — the diagonal connecting the vertices where the two congruent side-pairs meet — bisects the other diagonal. It is not necessarily bisected itself." },
      { q: "How is the midsegment related to the two bases?", a: "It's parallel to both bases, and its length is their average (arithmetic mean) — always between the shorter and longer base." },
      { q: "Is a parallelogram ever considered a trapezoid in this course?", a: "No — this course (matching Florida's B.E.S.T. standards) defines a trapezoid as having <em>exactly</em> one pair of parallel sides, which excludes parallelograms (which have two pairs)." },
    ],
  }),
]);

ch["7.5"] = L("7.5", "Coordinate Geometry Proofs for Quadrilaterals (Using Slope, Distance, and Midpoint) (MA.912.GR.3.2)", [
  lessonHtml({
    title: "Coordinate Proofs for Quadrilaterals",
    emoji: "📐",
    overview: `On the coordinate plane, every quadrilateral property from this chapter becomes something you can <em>compute</em> instead of just observe. <strong>Slope</strong> tests whether sides are parallel or perpendicular, <strong>distance</strong> tests whether sides or diagonals are congruent, and <strong>midpoint</strong> tests whether diagonals bisect each other. Coordinate proofs follow a consistent strategy: figure out which property the problem is asking you to establish, compute the matching tool for the relevant sides or diagonals, compare the results, and state the conclusion using the theorem or converse it matches.`,
    toolkit: [
      `<strong>Slope test for parallel:</strong> \\(\\overline{AB}\\parallel\\overline{CD}\\) exactly when slope of \\(AB\\) = slope of \\(CD\\).`,
      `<strong>Slope test for perpendicular:</strong> \\(\\overline{AB}\\perp\\overline{CD}\\) exactly when the slopes are negative reciprocals (their product is \\(-1\\)).`,
      `<strong>Distance formula</strong> \\(d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\) — compare side lengths or diagonal lengths for congruence.`,
      `<strong>Midpoint formula</strong> — the quickest parallelogram test: if both diagonals share the same midpoint, they bisect each other.`,
      `<strong>Strategy:</strong> (1) identify which theorem/converse you're trying to match, (2) compute the needed tool (slope, distance, or midpoint) for every relevant side or diagonal, (3) compare the results and state the conclusion.`,
    ],
    examples: [
      {
        h: "Proving a parallelogram with midpoints",
        p: "Quadrilateral \\(ABCD\\) has vertices \\(A(1,1)\\), \\(B(5,2)\\), \\(C(8,6)\\), \\(D(4,5)\\). Prove \\(ABCD\\) is a parallelogram using the diagonals' midpoints.",
        steps: [
          `<strong>Step 1 — Find the midpoint of \\(\\overline{AC}\\):</strong> \\(\\left(\\dfrac{1+8}{2},\\dfrac{1+6}{2}\\right)=(4.5,\\,3.5)\\).`,
          `<strong>Step 2 — Find the midpoint of \\(\\overline{BD}\\):</strong> \\(\\left(\\dfrac{5+4}{2},\\dfrac{2+5}{2}\\right)=(4.5,\\,3.5)\\).`,
          `<strong>Conclusion:</strong> both diagonals share the midpoint \\((4.5,3.5)\\), so they bisect each other — by the converse theorem, \\(ABCD\\) is a parallelogram.`,
        ],
        check: "Same midpoint for both diagonals is the single fastest coordinate test for a parallelogram.",
      },
      {
        h: "Proving a rectangle",
        p: "Quadrilateral \\(ABCD\\) has vertices \\(A(0,0)\\), \\(B(4,0)\\), \\(C(4,3)\\), \\(D(0,3)\\). Prove \\(ABCD\\) is a rectangle using slope and distance.",
        steps: [
          `<strong>Step 1 — Check for a right angle with slope:</strong> slope of \\(\\overline{AB}=0\\) (horizontal); slope of \\(\\overline{BC}\\) is undefined (vertical). A horizontal and vertical side are perpendicular, so \\(\\angle B=90^\\circ\\).`,
          `<strong>Step 2 — Check the diagonals with distance:</strong> \\(AC=\\sqrt{(4-0)^2+(3-0)^2}=\\sqrt{25}=5\\); \\(BD=\\sqrt{(0-4)^2+(3-0)^2}=\\sqrt{25}=5\\).`,
          `<strong>Conclusion:</strong> \\(ABCD\\) is a parallelogram (opposite sides horizontal/vertical and equal length) with a right angle and congruent diagonals — so it's a rectangle.`,
        ],
        check: "Congruent diagonals confirm the rectangle property independently of the right-angle check.",
      },
      {
        h: "Proving a rhombus with distance",
        p: "Quadrilateral \\(ABCD\\) has vertices \\(A(0,3)\\), \\(B(4,0)\\), \\(C(0,-3)\\), \\(D(-4,0)\\). Prove \\(ABCD\\) is a rhombus.",
        steps: [
          `<strong>Step 1 — Compute all four side lengths:</strong> \\(AB=\\sqrt{4^2+3^2}=5\\), \\(BC=\\sqrt{4^2+3^2}=5\\), \\(CD=\\sqrt{4^2+3^2}=5\\), \\(DA=\\sqrt{4^2+3^2}=5\\).`,
          `<strong>Step 2 — Compare:</strong> all four sides equal \\(5\\).`,
          `<strong>Conclusion:</strong> a quadrilateral with four congruent sides is a rhombus.`,
        ],
        check: "You can also confirm with the diagonals: \\(\\overline{AC}\\) lies on the \\(y\\)-axis and \\(\\overline{BD}\\) lies on the \\(x\\)-axis — perpendicular, bisecting each other at the origin.",
      },
      {
        h: "Classifying a general quadrilateral",
        p: "Quadrilateral \\(ABCD\\) has vertices \\(A(0,0)\\), \\(B(6,0)\\), \\(C(4,3)\\), \\(D(1,3)\\). Classify \\(ABCD\\) using slope and distance.",
        steps: [
          `<strong>Step 1 — Check for parallel sides:</strong> slope of \\(\\overline{AB}=\\dfrac{0-0}{6-0}=0\\); slope of \\(\\overline{DC}=\\dfrac{3-3}{4-1}=0\\). Since \\(\\overline{AB}\\parallel\\overline{DC}\\), \\(ABCD\\) is at least a trapezoid.`,
          `<strong>Step 2 — Check the legs for parallelism and length:</strong> slope of \\(\\overline{AD}=\\dfrac{3-0}{1-0}=3\\); slope of \\(\\overline{BC}=\\dfrac{3-0}{4-6}=-1.5\\) — not equal, so the legs aren't parallel (confirming exactly one pair of parallel sides, not two).`,
          `<strong>Step 3 — Compare leg lengths:</strong> \\(AD=\\sqrt{1^2+3^2}=\\sqrt{10}\\); \\(BC=\\sqrt{2^2+3^2}=\\sqrt{13}\\) — not equal.`,
          `<strong>Conclusion:</strong> \\(ABCD\\) is a trapezoid (exactly one pair of parallel sides), but not isosceles, since the legs are neither parallel nor congruent.`,
        ],
        check: "The unequal bases (6 vs. 3) also rule out a parallelogram from the start.",
      },
      {
        h: "Proving a square",
        p: "Quadrilateral \\(ABCD\\) has vertices \\(A(2,0)\\), \\(B(0,2)\\), \\(C(-2,0)\\), \\(D(0,-2)\\). Prove \\(ABCD\\) is a square.",
        steps: [
          `<strong>Step 1 — Check all sides with distance:</strong> \\(AB=\\sqrt{2^2+2^2}=2\\sqrt{2}\\), and by the same pattern \\(BC=CD=DA=2\\sqrt{2}\\) — all sides congruent.`,
          `<strong>Step 2 — Check the diagonals:</strong> \\(\\overline{AC}\\) runs along the \\(x\\)-axis with length \\(4\\); \\(\\overline{BD}\\) runs along the \\(y\\)-axis with length \\(4\\) — congruent and perpendicular (one horizontal, one vertical).`,
          `<strong>Step 3 — Check the midpoints:</strong> both diagonals have midpoint \\((0,0)\\), so they bisect each other.`,
          `<strong>Conclusion:</strong> congruent sides (rhombus) plus congruent, perpendicular, bisecting diagonals (rectangle + rhombus overlap) means \\(ABCD\\) is a square.`,
        ],
        check: "Consistency check: for a square, diagonal \\(=\\) side \\(\\times\\sqrt{2}=2\\sqrt2\\times\\sqrt2=4\\), matching Step 2. ✓",
      },
    ],
    practice: [
      { q: "\\(A(0,0)\\), \\(B(3,4)\\), \\(C(8,4)\\), \\(D(5,0)\\). Prove \\(ABCD\\) is a parallelogram using the midpoints of the diagonals.", a: "Midpoint of \\(\\overline{AC}=(4,2)\\); midpoint of \\(\\overline{BD}=(4,2)\\). Equal midpoints mean the diagonals bisect each other, so \\(ABCD\\) is a parallelogram." },
      { q: "\\(A(1,1)\\), \\(B(5,1)\\), \\(C(5,4)\\), \\(D(1,4)\\). Prove \\(ABCD\\) is a rectangle using slope.", a: "Slope of \\(\\overline{AB}=0\\) and slope of \\(\\overline{BC}\\) is undefined, so consecutive sides are perpendicular at every vertex, giving four right angles — a rectangle." },
      { q: "\\(A(0,0)\\), \\(B(3,4)\\), \\(C(6,0)\\), \\(D(3,-4)\\). Prove \\(ABCD\\) is a rhombus.", a: "\\(AB=BC=CD=DA=\\sqrt{3^2+4^2}=5\\). Four congruent sides mean \\(ABCD\\) is a rhombus." },
      { q: "\\(A(0,0)\\), \\(B(5,0)\\), \\(C(6,3)\\), \\(D(0,3)\\). Determine whether \\(ABCD\\) is a trapezoid, parallelogram, or neither.", a: "Slope of \\(\\overline{AB}=0\\) and slope of \\(\\overline{DC}=0\\), so \\(\\overline{AB}\\parallel\\overline{DC}\\). But \\(AB=5\\) and \\(DC=6\\) are unequal, so it's a trapezoid, not a parallelogram." },
      { q: "\\(A(-3,0)\\), \\(B(0,3)\\), \\(C(3,0)\\), \\(D(0,-3)\\). Fully classify \\(ABCD\\).", a: "All sides equal \\(\\sqrt{18}=3\\sqrt{2}\\); diagonals lie on the axes, are congruent (length 6), perpendicular, and bisect each other at the origin — so \\(ABCD\\) is a square." },
    ],
    qa: [
      { q: "Which tool proves sides are parallel?", a: "Slope — equal slopes for two sides mean those sides are parallel." },
      { q: "Which tool proves a right angle or perpendicular diagonals?", a: "Slope again — sides or diagonals are perpendicular exactly when their slopes multiply to \\(-1\\) (negative reciprocals)." },
      { q: "Which tool is fastest for showing diagonals bisect each other?", a: "The midpoint formula — if both diagonals share the same midpoint, they bisect each other, which is the quickest coordinate parallelogram test." },
      { q: "How many properties do I need to establish to prove a specific quadrilateral type, like a rectangle?", a: "Enough to satisfy one complete theorem or converse — for example, show it's a parallelogram (via slopes or midpoints) and then show it also has a right angle or congruent diagonals." },
      { q: "What if a side is vertical, so its slope is undefined?", a: "Two vertical sides are still parallel to each other by definition. And a vertical side paired with a horizontal side (slope 0) is automatically perpendicular, even though the slope formula's \"product equals \\(-1\\)\" rule doesn't literally apply to an undefined slope." },
    ],
  }),
]);
