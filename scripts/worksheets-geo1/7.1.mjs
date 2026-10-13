import { fig, polygonFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "7.1",
  title: "Polygon Angle Sums",
  intro: "Every convex polygon's interior angles can be found by splitting the polygon into triangles from one vertex: an $n$-gon splits into $(n-2)$ triangles, and since each triangle contributes $180^\\circ$, the interior angle sum is $S=(n-2)\\cdot180^\\circ$. Exterior angles (one per vertex, formed by extending each side) always add to exactly $360^\\circ$ for <i>any</i> convex polygon, no matter how many sides it has — walking once around the perimeter turns you through one full rotation. For a <b>regular</b> polygon (congruent sides and angles), split these totals evenly: each interior angle is $\\dfrac{(n-2)180^\\circ}{n}$, and each exterior angle is $\\dfrac{360^\\circ}{n}$. At any single vertex, the interior and exterior angles are supplementary. This worksheet goes beyond plugging into a formula — expect triangulation reasoning, two-variable algebra, and word problems that combine both formulas.",
  examples: [
    ["Example 1: Triangulate a hexagon (see why the formula works)",
      "Find the sum of the interior angles of a convex hexagon by triangulating it from one vertex, then confirm with the formula.",
      fig(polygonFig(6, "6 sides"), "A hexagon splits into $6-2=4$ triangles when diagonals are drawn from one vertex.") +
      "Draw diagonals from one vertex to every non-adjacent vertex. This splits the hexagon into $6-2=4$ triangles.<br>" +
      "Each triangle's angles sum to $180^\\circ$, and together the triangles' angles make up exactly the hexagon's interior angles, so:<br>" +
      "$S = 4\\cdot180^\\circ = 720^\\circ$.<br>" +
      "Check with the formula: $S=(n-2)180^\\circ=(6-2)180^\\circ=720^\\circ$. ✓<br>" +
      "<b>Answer:</b> $720^\\circ$."],

    ["Example 2: Regular octagon — two methods",
      "A stop sign is a regular octagon. Find the measure of each interior angle two different ways.",
      fig(polygonFig(8, "8 sides"), "A regular octagon: all 8 sides and all 8 interior angles are congruent.") +
      "<b>Method 1 (interior sum):</b> $S=(8-2)180^\\circ=1080^\\circ$. Divide evenly among the $8$ congruent angles: $\\dfrac{1080^\\circ}{8}=135^\\circ$.<br>" +
      "<b>Method 2 (exterior angle):</b> Each exterior angle is $\\dfrac{360^\\circ}{8}=45^\\circ$. Since interior and exterior angles at a vertex are supplementary, interior $=180^\\circ-45^\\circ=135^\\circ$.<br>" +
      "Both methods agree.<br>" +
      "<b>Answer:</b> $135^\\circ$."],

    ["Example 3: Find $n$ from the interior sum",
      "The interior angles of a convex polygon sum to $1440^\\circ$. How many sides does it have?",
      "Set up the formula and solve for $n$:<br>" +
      "$(n-2)180^\\circ=1440^\\circ$<br>" +
      "$n-2=\\dfrac{1440}{180}=8$<br>" +
      "$n=10$.<br>" +
      "<b>Check:</b> $(10-2)180^\\circ=8\\cdot180^\\circ=1440^\\circ$. ✓<br>" +
      "<b>Answer:</b> a decagon ($10$ sides)."],

    ["Example 4: Regular $15$-gon — exterior then interior",
      "A regular polygon has $15$ sides. Find each exterior angle, then each interior angle, and verify your interior angle with the sum formula.",
      "Exterior angle: $\\dfrac{360^\\circ}{15}=24^\\circ$.<br>" +
      "Interior angle (supplementary to exterior): $180^\\circ-24^\\circ=156^\\circ$.<br>" +
      "<b>Verify:</b> interior sum should be $(15-2)180^\\circ=2340^\\circ$; and $15\\cdot156^\\circ=2340^\\circ$. ✓<br>" +
      "<b>Answer:</b> exterior $=24^\\circ$, interior $=156^\\circ$."],

    ["Example 5: Missing angle in an irregular pentagon",
      "A pentagon has angles $100^\\circ$, $110^\\circ$, $95^\\circ$, $120^\\circ$, and $x$. Find $x$.",
      "Interior sum for a pentagon: $S=(5-2)180^\\circ=540^\\circ$.<br>" +
      "Add the known angles: $100+110+95+120=425^\\circ$.<br>" +
      "$x=540^\\circ-425^\\circ=115^\\circ$.<br>" +
      "<b>Answer:</b> $x=115^\\circ$."],

    ["Example 6: Does the exterior-sum rule hold for a triangle?",
      "Verify that the exterior angles of an equilateral triangle sum to $360^\\circ$, just like any other convex polygon.",
      "An equilateral triangle has three congruent interior angles of $60^\\circ$ each.<br>" +
      "Each exterior angle is supplementary to its interior angle: $180^\\circ-60^\\circ=120^\\circ$.<br>" +
      "Sum of the three exterior angles: $3\\cdot120^\\circ=360^\\circ$.<br>" +
      "So the exterior-angle-sum rule ($360^\\circ$) holds true even for the smallest possible polygon, $n=3$. This rule never depends on $n$."],

    ["Example 7: Find $n$ from an exterior angle",
      "Each exterior angle of a regular polygon measures $40^\\circ$. How many sides does the polygon have?",
      "The exterior angles of a regular $n$-gon are all equal and sum to $360^\\circ$, so each one is $\\dfrac{360^\\circ}{n}$.<br>" +
      "$40^\\circ=\\dfrac{360^\\circ}{n} \\Rightarrow n=\\dfrac{360^\\circ}{40^\\circ}=9$.<br>" +
      "<b>Answer:</b> a regular nonagon ($9$ sides)."],

    ["Example 8: Algebraic quadrilateral",
      "A quadrilateral has angles $3x$, $2x$, $4x$, and $x$. Find $x$ and each angle, then check the sum.",
      "Interior sum of a quadrilateral: $(4-2)180^\\circ=360^\\circ$.<br>" +
      "$3x+2x+4x+x=360^\\circ \\Rightarrow 10x=360^\\circ \\Rightarrow x=36^\\circ$.<br>" +
      "Angles: $3x=108^\\circ$, $2x=72^\\circ$, $4x=144^\\circ$, $x=36^\\circ$.<br>" +
      "<b>Check:</b> $108+72+144+36=360^\\circ$. ✓"],

    ["Example 9: Nonagon interior sum",
      "Find the interior angle sum of a convex nonagon ($9$ sides), and the measure of each angle if it is regular.",
      "$S=(9-2)180^\\circ=7\\cdot180^\\circ=1260^\\circ$.<br>" +
      "If regular, each angle $=\\dfrac{1260^\\circ}{9}=140^\\circ$.<br>" +
      "<b>Answer:</b> sum $=1260^\\circ$; each angle (if regular) $=140^\\circ$."],

    ["Example 10: Interior sum as a multiple of the exterior sum",
      "A convex polygon's interior angle sum is exactly $3$ times its exterior angle sum. Find the number of sides.",
      "The exterior sum is always $360^\\circ$ for a convex polygon, so the interior sum here is $3\\cdot360^\\circ=1080^\\circ$.<br>" +
      "$(n-2)180^\\circ=1080^\\circ$<br>" +
      "$n-2=6$<br>" +
      "$n=8$.<br>" +
      "<b>Answer:</b> $8$ sides (an octagon)."],

    ["Example 11: Can regular pentagons tile a floor?",
      "A contractor wants to tile a floor edge-to-edge using only regular pentagon tiles, with tiles meeting perfectly at every point (angles around a point must add to exactly $360^\\circ$). Determine whether this is possible.",
      "Each interior angle of a regular pentagon: $\\dfrac{(5-2)180^\\circ}{5}=\\dfrac{540^\\circ}{5}=108^\\circ$.<br>" +
      "For tiles to meet perfectly at a point with no gaps or overlaps, $108^\\circ$ must divide evenly into $360^\\circ$:<br>" +
      "$\\dfrac{360^\\circ}{108^\\circ}=3.\\overline{3}$ — not a whole number.<br>" +
      "<b>Answer:</b> No. Three pentagons leave a $360-3(108)=36^\\circ$ gap, and a fourth would overlap. (This is why floor and wall tiles are usually squares, equilateral triangles, or regular hexagons — the only regular polygons whose interior angle divides evenly into $360^\\circ$.)"],
  ],
  questions: [
    ["Problem 1: Interior sum", "Find the interior angle sum of a convex heptagon ($n=7$).", "$900^\\circ$"],
    ["Problem 2: Regular polygon", "Find each interior angle of a regular decagon.", "$144^\\circ$"],
    ["Problem 3: Find $n$", "The interior angle sum is $2340^\\circ$. Find $n$.", "$n=15$"],
    ["Problem 4: Exterior angle", "Find each exterior angle of a regular $20$-gon.", "$18^\\circ$"],
    ["Problem 5: Missing angle", "A hexagon has five angles of $120^\\circ$ each; find the sixth.", "$120^\\circ$"],
    ["Problem 6: Exterior sum", "Find the exterior angle sum of a convex $100$-gon.", "$360^\\circ$"],
    ["Problem 7: Find $n$", "A regular polygon has each exterior angle $24^\\circ$. Find $n$.", "$n=15$"],
    ["Problem 8: Regular polygon", "Find each interior angle of a regular pentagon.", "$108^\\circ$"],
    ["Problem 9: Algebra", "A quadrilateral has angles $2x$, $3x$, $4x$, $x$. Find the largest angle.", "$144^\\circ$ ($x=36^\\circ$)"],
    ["Problem 10: Interior sum", "Find the interior angle sum of a convex dodecagon ($n=12$).", "$1800^\\circ$"],
    ["Problem 11: Interior from exterior", "One exterior angle is $30^\\circ$. Find the interior angle at that same vertex.", "$150^\\circ$"],
    ["Problem 12: Find $n$", "A regular polygon has each interior angle $150^\\circ$. Find $n$.", "$n=12$"],
    ["Problem 13: Missing angle", "A pentagon has angles $90^\\circ$, $100^\\circ$, $110^\\circ$, $120^\\circ$, and $x$. Find $x$.", "$x=120^\\circ$"],
    ["Problem 14: Challenge", "A regular polygon's interior angle is exactly $8$ times its exterior angle. Find the number of sides.", "$n=18$ (each exterior $=20^\\circ$, each interior $=160^\\circ$)"],
    ["Problem 15: Challenge", "A convex nonagon has interior angles that are nine consecutive integers (in degrees). Find the smallest and largest angles.", "Smallest $136^\\circ$, largest $144^\\circ$ (sum $=1260^\\circ$)"],
  ],
};
