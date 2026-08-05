import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

ch["8.1"] = L("8.1", "The Distance, Midpoint, and Slope Formulas (Review and Application)", [
  lessonHtml({
    title: "Distance, Midpoint & Slope",
    emoji: "📏",
    overview: `Three formulas do almost all of the work in coordinate geometry, and this chapter leans on them constantly. The <strong>distance formula</strong> measures how far apart two points are (built directly from the Pythagorean theorem). The <strong>midpoint formula</strong> finds the point exactly halfway between two others. The <strong>slope formula</strong> measures a line's steepness and direction, and comparing slopes is how we test for parallel or perpendicular lines. Together, these three formulas describe a segment completely: how long it is, where its middle sits, and which way it points.`,
    toolkit: [
      `<strong>Distance:</strong> \\(d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\) — the Pythagorean theorem applied to the horizontal and vertical legs \\(\\Delta x\\), \\(\\Delta y\\).`,
      `<strong>Midpoint:</strong> \\(M=\\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2}\\right)\\) — the average of the \\(x\\)-coordinates and the average of the \\(y\\)-coordinates.`,
      `<strong>Slope:</strong> \\(m=\\dfrac{y_2-y_1}{x_2-x_1}\\) (undefined when \\(x_1=x_2\\), i.e. a vertical line).`,
      `<strong>Parallel lines</strong> have equal slopes; <strong>perpendicular lines</strong> have slopes that are negative reciprocals of each other (their product is \\(-1\\)).`,
      `To find a missing endpoint given a midpoint and one endpoint, solve the midpoint formula for the unknown coordinates instead of the midpoint itself.`,
    ],
    examples: [
      {
        h: "Finding a distance",
        p: "Find the distance between \\(A(1,2)\\) and \\(B(4,6)\\).",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(d=\\sqrt{(4-1)^2+(6-2)^2}\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(d=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5\\).`,
        ],
        check: "3-4-5 is one of the most common Pythagorean triples — recognizing it speeds up calculations like this.",
      },
      {
        h: "Finding a midpoint",
        p: "Find the midpoint of the segment joining \\((-3,5)\\) and \\((7,-1)\\).",
        steps: [
          `<strong>Step 1 — Average the \\(x\\)-coordinates:</strong> \\(\\dfrac{-3+7}{2}=\\dfrac{4}{2}=2\\).`,
          `<strong>Step 2 — Average the \\(y\\)-coordinates:</strong> \\(\\dfrac{5+(-1)}{2}=\\dfrac{4}{2}=2\\).`,
        ],
        check: "Midpoint: \\((2,2)\\).",
      },
      {
        h: "Finding a slope",
        p: "Find the slope of the line through \\((2,-1)\\) and \\((5,8)\\).",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(m=\\dfrac{8-(-1)}{5-2}\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(m=\\dfrac{9}{3}=3\\).`,
        ],
        check: "Order doesn't matter as long as you're consistent: swapping both points gives \\(\\dfrac{-1-8}{2-5}=\\dfrac{-9}{-3}=3\\) too.",
      },
      {
        h: "Finding a missing endpoint",
        p: "\\(M(3,1)\\) is the midpoint of \\(\\overline{AB}\\), with \\(A(-1,-2)\\). Find \\(B\\).",
        steps: [
          `<strong>Step 1 — Set up the midpoint equations:</strong> \\(3=\\dfrac{-1+x_B}{2}\\) and \\(1=\\dfrac{-2+y_B}{2}\\).`,
          `<strong>Step 2 — Solve for \\(x_B\\):</strong> \\(6=-1+x_B \\Rightarrow x_B=7\\).`,
          `<strong>Step 3 — Solve for \\(y_B\\):</strong> \\(2=-2+y_B \\Rightarrow y_B=4\\).`,
        ],
        check: "Midpoint of \\((-1,-2)\\) and \\((7,4)\\): \\(\\left(\\dfrac{-1+7}{2},\\dfrac{-2+4}{2}\\right)=(3,1)\\). ✓",
      },
      {
        h: "Using distance to test for an equilateral triangle",
        p: "Is the triangle with vertices \\(A(0,0)\\), \\(B(4,0)\\), \\(C(2,2\\sqrt{3})\\) equilateral?",
        steps: [
          `<strong>Step 1 — Find \\(AB\\):</strong> \\(AB=\\sqrt{(4-0)^2+0^2}=4\\).`,
          `<strong>Step 2 — Find \\(AC\\):</strong> \\(AC=\\sqrt{2^2+(2\\sqrt3)^2}=\\sqrt{4+12}=\\sqrt{16}=4\\).`,
          `<strong>Step 3 — Find \\(BC\\):</strong> \\(BC=\\sqrt{(2-4)^2+(2\\sqrt3)^2}=\\sqrt{4+12}=4\\).`,
        ],
        check: "All three sides equal 4, so yes — the triangle is equilateral.",
      },
    ],
    practice: [
      { q: "Find the distance between \\((0,0)\\) and \\((6,8)\\).", a: "\\(\\sqrt{6^2+8^2}=\\sqrt{100}=10\\)." },
      { q: "Find the midpoint of \\((2,9)\\) and \\((-4,3)\\).", a: "\\(\\left(\\dfrac{2+(-4)}{2},\\dfrac{9+3}{2}\\right)=(-1,6)\\)." },
      { q: "Find the slope of the line through \\((-2,4)\\) and \\((3,-6)\\).", a: "\\(m=\\dfrac{-6-4}{3-(-2)}=\\dfrac{-10}{5}=-2\\)." },
      { q: "The midpoint of \\(\\overline{PQ}\\) is \\((5,-2)\\), and \\(P=(9,1)\\). Find \\(Q\\).", a: "\\(5=\\dfrac{9+x_Q}{2}\\Rightarrow x_Q=1\\); \\(-2=\\dfrac{1+y_Q}{2}\\Rightarrow y_Q=-5\\). So \\(Q=(1,-5)\\)." },
      { q: "Are the lines through \\((1,2)\\)–\\((4,8)\\) and \\((0,5)\\)–\\((2,9)\\) parallel?", a: "Slope of the first: \\(\\dfrac{8-2}{4-1}=2\\). Slope of the second: \\(\\dfrac{9-5}{2-0}=2\\). Equal slopes, so yes — the lines are parallel." },
    ],
    qa: [
      { q: "Where does the distance formula come from?", a: "The Pythagorean theorem — the horizontal change \\(\\Delta x\\) and vertical change \\(\\Delta y\\) between two points form the legs of a right triangle, and the distance is the hypotenuse." },
      { q: "Does the order of the two points matter for the midpoint formula?", a: "No — the midpoint formula is symmetric, so it gives the same result no matter which point you call \\((x_1,y_1)\\) and which you call \\((x_2,y_2)\\)." },
      { q: "What's the slope of a vertical line? A horizontal line?", a: "A vertical line has undefined slope (since \\(\\Delta x=0\\) would require dividing by zero). A horizontal line has slope \\(0\\) (since \\(\\Delta y=0\\))." },
      { q: "How can slope alone tell me two segments are parallel or perpendicular?", a: "Equal slopes mean the segments point in exactly the same direction, so they're parallel. Slopes that multiply to \\(-1\\) mean the segments turn a full quarter-turn from each other, so they're perpendicular." },
      { q: "What if I need a point that's not exactly halfway between two others?", a: "That's a more general version of this idea — finding a point that splits a segment in some other ratio, which is exactly what the next lesson's weighted average (section) formula does." },
    ],
  }),
]);

ch["8.2"] = L("8.2", "Weighted Average of Points on a Line (MA.912.GR.3.1 — New B.E.S.T. Topic)", [
  lessonHtml({
    title: "Partitioning a Segment (Weighted Average)",
    emoji: "⚖️",
    overview: `The midpoint formula finds the point exactly halfway between \\(A\\) and \\(B\\) — but what if you need a point that's, say, \\(\\frac14\\) of the way from \\(A\\) to \\(B\\), or splits \\(\\overline{AB}\\) in the ratio \\(2:3\\)? That point \\(P\\) is a <strong>weighted average</strong> of \\(A\\) and \\(B\\): its coordinates blend the two endpoints' coordinates, weighted by how close \\(P\\) sits to each one. This is a genuinely new B.E.S.T. topic, and the midpoint formula turns out to be just its simplest special case.`,
    toolkit: [
      `To find the point \\(P\\) that divides \\(\\overline{AB}\\) in the ratio \\(AP:PB=m:n\\) (measured starting from \\(A\\)): \\(P=\\left(\\dfrac{n\\,x_A+m\\,x_B}{m+n},\\ \\dfrac{n\\,y_A+m\\,y_B}{m+n}\\right)\\).`,
      `<strong>Equivalent "step" form:</strong> \\(P=A+\\dfrac{m}{m+n}(B-A)\\) — walk the fraction \\(\\dfrac{m}{m+n}\\) of the total distance from \\(A\\) toward \\(B\\).`,
      `<strong>Sanity check:</strong> when \\(m=n\\) (ratio \\(1:1\\)), the fraction becomes \\(\\dfrac12\\), and the formula reduces to the ordinary midpoint formula.`,
      `The fraction \\(\\dfrac{m}{m+n}\\) is how far along (from \\(A\\)) \\(P\\) sits; \\(\\dfrac{n}{m+n}\\) is the remaining fraction to \\(B\\). The two fractions always add to \\(1\\).`,
      `The same fraction applies to the \\(x\\)- and \\(y\\)-coordinates separately — find \\(\\Delta x=x_B-x_A\\) and \\(\\Delta y=y_B-y_A\\) once, then scale each by the fraction.`,
    ],
    examples: [
      {
        h: "Basic partition point",
        p: "Find the point \\(P\\) that divides \\(\\overline{AB}\\) in the ratio \\(AP:PB=2:3\\), where \\(A(0,0)\\) and \\(B(10,0)\\).",
        steps: [
          `<strong>Step 1 — Find the fraction:</strong> \\(\\dfrac{m}{m+n}=\\dfrac{2}{2+3}=\\dfrac{2}{5}\\).`,
          `<strong>Step 2 — Apply the step form:</strong> \\(P=A+\\dfrac25(B-A)=(0,0)+\\dfrac25(10,0)\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(P=(4,0)\\).`,
        ],
        check: "\\(AP=4\\) and \\(PB=6\\); the ratio \\(4:6\\) reduces to \\(2:3\\). ✓",
      },
      {
        h: "A two-dimensional partition point",
        p: "Find the point \\(P\\) dividing \\(\\overline{AB}\\) in the ratio \\(AP:PB=1:3\\), where \\(A(1,2)\\) and \\(B(9,10)\\).",
        steps: [
          `<strong>Step 1 — Find the fraction:</strong> \\(\\dfrac{1}{1+3}=\\dfrac14\\).`,
          `<strong>Step 2 — Find \\(\\Delta x\\) and \\(\\Delta y\\):</strong> \\(\\Delta x=9-1=8\\), \\(\\Delta y=10-2=8\\).`,
          `<strong>Step 3 — Scale and add to \\(A\\):</strong> \\(P=\\left(1+8\\cdot\\dfrac14,\\ 2+8\\cdot\\dfrac14\\right)=(3,4)\\).`,
        ],
        check: "\\(P\\) should be closer to \\(A\\) since \\(AP\\) is the smaller part of the ratio — and \\((3,4)\\) is indeed much nearer \\(A(1,2)\\) than \\(B(9,10)\\). ✓",
      },
      {
        h: "A ratio closer to the far endpoint",
        p: "Find the point \\(P\\) dividing \\(\\overline{AB}\\) in the ratio \\(AP:PB=3:1\\), where \\(A(-2,5)\\) and \\(B(6,-3)\\).",
        steps: [
          `<strong>Step 1 — Find the fraction:</strong> \\(\\dfrac{3}{3+1}=\\dfrac34\\).`,
          `<strong>Step 2 — Find \\(\\Delta x\\) and \\(\\Delta y\\):</strong> \\(\\Delta x=6-(-2)=8\\), \\(\\Delta y=-3-5=-8\\).`,
          `<strong>Step 3 — Scale and add to \\(A\\):</strong> \\(P=\\left(-2+8\\cdot\\dfrac34,\\ 5+(-8)\\cdot\\dfrac34\\right)=(4,-1)\\).`,
        ],
        check: "This time \\(P\\) should sit closer to \\(B\\), since \\(AP\\) is the larger part of the ratio — and \\((4,-1)\\) is much nearer \\(B(6,-3)\\) than \\(A(-2,5)\\). ✓",
      },
      {
        h: "Working backward to find an endpoint",
        p: "Point \\(P(5,4)\\) lies on \\(\\overline{AB}\\) with \\(AP:PB=1:2\\), and \\(A(2,1)\\). Find \\(B\\).",
        steps: [
          `<strong>Step 1 — Write the step form:</strong> \\(P=A+\\dfrac13(B-A)\\), since the fraction is \\(\\dfrac{1}{1+2}=\\dfrac13\\).`,
          `<strong>Step 2 — Isolate \\(B-A\\):</strong> \\(P-A=\\dfrac13(B-A) \\Rightarrow B-A=3(P-A)\\).`,
          `<strong>Step 3 — Compute:</strong> \\(P-A=(3,3)\\), so \\(B-A=3(3,3)=(9,9)\\), giving \\(B=(2+9,\\,1+9)=(11,10)\\).`,
        ],
        check: "\\(AP=\\sqrt{3^2+3^2}=3\\sqrt2\\) and \\(PB=\\sqrt{6^2+6^2}=6\\sqrt2\\); the ratio \\(3\\sqrt2:6\\sqrt2=1:2\\). ✓",
      },
      {
        h: "A fraction-of-the-way phrasing",
        p: "Find the point that is \\(\\dfrac14\\) of the way from \\(A(0,0)\\) to \\(B(8,12)\\).",
        steps: [
          `<strong>Step 1 — Recognize the fraction directly:</strong> "\\(\\dfrac14\\) of the way from \\(A\\) to \\(B\\)" is already the fraction \\(\\dfrac{m}{m+n}=\\dfrac14\\) (equivalent to ratio \\(1:3\\)).`,
          `<strong>Step 2 — Apply the step form:</strong> \\(P=(0,0)+\\dfrac14(8,12)\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(P=(2,3)\\).`,
        ],
        check: "A quarter of \\(\\Delta x=8\\) is \\(2\\), and a quarter of \\(\\Delta y=12\\) is \\(3\\). ✓",
      },
    ],
    practice: [
      { q: "Find the point dividing \\(\\overline{AB}\\) in the ratio \\(1:1\\), where \\(A(0,0)\\), \\(B(12,4)\\).", a: "This is just the midpoint: \\((6,2)\\)." },
      { q: "Find the point dividing \\(\\overline{AB}\\) in the ratio \\(3:1\\), where \\(A(2,2)\\), \\(B(10,10)\\).", a: "Fraction \\(=\\dfrac34\\); \\(\\Delta x=\\Delta y=8\\); \\(P=(2+6,2+6)=(8,8)\\)." },
      { q: "Find the point dividing \\(\\overline{AB}\\) in the ratio \\(1:3\\), where \\(A(-4,-2)\\), \\(B(4,6)\\).", a: "Fraction \\(=\\dfrac14\\); \\(\\Delta x=\\Delta y=8\\); \\(P=(-4+2,-2+2)=(-2,0)\\)." },
      { q: "Find the point \\(\\dfrac23\\) of the way from \\(A(1,1)\\) to \\(B(7,10)\\).", a: "\\(\\Delta x=6\\), \\(\\Delta y=9\\); \\(P=\\left(1+6\\cdot\\dfrac23,\\ 1+9\\cdot\\dfrac23\\right)=(5,7)\\)." },
      { q: "\\(P(7,2)\\) lies on \\(\\overline{AB}\\) with \\(AP:PB=2:3\\), and \\(A(3,-1)\\). Find \\(B\\).", a: "Fraction \\(=\\dfrac25\\), so \\(B-A=\\dfrac52(P-A)=\\dfrac52(4,3)=(10,7.5)\\). Thus \\(B=(13,\\,6.5)\\)." },
    ],
    qa: [
      { q: "What does \"weighted average\" mean here?", a: "\\(P\\)'s coordinates are a blend of \\(A\\)'s and \\(B\\)'s coordinates, weighted by how close \\(P\\) is to each endpoint — the closer \\(P\\) is to \\(B\\), the more \\(B\\)'s coordinates count toward the blend." },
      { q: "In the weighted-average form, which weight goes with which point?", a: "Point \\(A\\) is paired with weight \\(n\\) and point \\(B\\) is paired with weight \\(m\\) — the opposite of the ratio number nearest to each point — because \\(P\\) is \\(m\\) parts of the way toward \\(B\\) and only \\(n\\) parts of the way remaining." },
      { q: "How does this connect back to the midpoint formula?", a: "The midpoint is the special case \\(m=n=1\\) (a \\(1:1\\) ratio), and the weighted average formula collapses exactly to the familiar average of the coordinates." },
      { q: "What if a ratio is given as a fraction, like \"\\(\\dfrac13\\) of the way from \\(A\\) to \\(B\\)\"?", a: "Use that fraction directly in the step form, \\(P=A+(\\text{fraction})(B-A)\\) — there's no need to convert it into an \\(m:n\\) ratio first." },
      { q: "Can this formula locate a point beyond \\(B\\), not just between \\(A\\) and \\(B\\)?", a: "Using a fraction greater than \\(1\\) (or negative) in the step form would locate points beyond the segment on the same line, but this course focuses on points that lie between \\(A\\) and \\(B\\)." },
    ],
  }),
]);

ch["8.3"] = L("8.3", "Area of 2D Figures (Triangles, Quadrilaterals, Regular Polygons) (MA.912.GR.4.4)", [
  lessonHtml({
    title: "Area of Polygons",
    emoji: "🔺",
    overview: `Every area formula in this lesson comes from decomposing a shape into triangles and rectangles you already know how to measure. A triangle's area is half a base times its height; a trapezoid averages its two parallel bases before multiplying by the height; a rhombus or kite splits along its perpendicular diagonals; and a regular polygon splits into congruent isosceles triangles from its center. Recognizing which decomposition fits a figure is usually the whole battle.`,
    toolkit: [
      `<strong>Triangle:</strong> \\(A=\\dfrac12 bh\\).`,
      `<strong>Parallelogram:</strong> \\(A=bh\\); <strong>rectangle:</strong> \\(A=lw\\).`,
      `<strong>Trapezoid:</strong> \\(A=\\dfrac12(b_1+b_2)h\\).`,
      `<strong>Rhombus or kite</strong> (from diagonals): \\(A=\\dfrac12 d_1 d_2\\), since the perpendicular diagonals split the figure into right triangles.`,
      `<strong>Regular polygon:</strong> \\(A=\\dfrac12\\,a\\,P\\), where \\(a\\) is the apothem (center to the midpoint of a side) and \\(P\\) is the perimeter.`,
    ],
    examples: [
      {
        h: "Area of a triangle",
        p: "Find the area of a triangle with base 12 and height 7.",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(A=\\dfrac12(12)(7)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(A=42\\).`,
        ],
      },
      {
        h: "Area of a trapezoid",
        p: "Find the area of a trapezoid with bases 8 and 14 and height 5.",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(A=\\dfrac12(8+14)(5)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(A=\\dfrac12(22)(5)=55\\).`,
        ],
      },
      {
        h: "Area of a rhombus from its diagonals",
        p: "Find the area of a rhombus with diagonals 10 and 16.",
        steps: [
          `<strong>Step 1 — Apply the formula:</strong> \\(A=\\dfrac12(10)(16)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(A=\\dfrac12(160)=80\\).`,
        ],
      },
      {
        h: "Area of a regular hexagon",
        p: "Find the area of a regular hexagon with side length 6.",
        steps: [
          `<strong>Step 1 — Find the apothem:</strong> a regular hexagon's apothem is \\(a=\\dfrac{s\\sqrt3}{2}=\\dfrac{6\\sqrt3}{2}=3\\sqrt3\\).`,
          `<strong>Step 2 — Find the perimeter:</strong> \\(P=6(6)=36\\).`,
          `<strong>Step 3 — Apply the formula:</strong> \\(A=\\dfrac12(3\\sqrt3)(36)=54\\sqrt3\\).`,
        ],
        check: "\\(54\\sqrt3\\approx93.5\\) square units — reasonable for a hexagon a little bigger than its 6-by-6 bounding shape would suggest.",
      },
      {
        h: "Area of a composite figure",
        p: "A rectangle measuring 10 by 6 has a right-triangular corner cut off, with legs 6 and 4. Find the remaining area.",
        steps: [
          `<strong>Step 1 — Find the full rectangle's area:</strong> \\(A_{\\text{rect}}=10(6)=60\\).`,
          `<strong>Step 2 — Find the cut-off triangle's area:</strong> \\(A_{\\text{tri}}=\\dfrac12(6)(4)=12\\).`,
          `<strong>Step 3 — Subtract:</strong> \\(60-12=48\\).`,
        ],
      },
    ],
    practice: [
      { q: "Find the area of a triangle with base 15 and height 8.", a: "\\(\\dfrac12(15)(8)=60\\)." },
      { q: "Find the area of a parallelogram with base 9 and height 11.", a: "\\(9(11)=99\\)." },
      { q: "Find the area of a trapezoid with bases 6 and 10 and height 4.", a: "\\(\\dfrac12(6+10)(4)=32\\)." },
      { q: "Find the area of a rhombus with diagonals 14 and 9.", a: "\\(\\dfrac12(14)(9)=63\\)." },
      { q: "A regular octagon has apothem 6 and side length 5. Find its area.", a: "Perimeter \\(=8(5)=40\\); area \\(=\\dfrac12(6)(40)=120\\)." },
    ],
    qa: [
      { q: "Why does the rhombus/kite area formula use diagonals instead of base and height?", a: "Because the diagonals are perpendicular, they split a rhombus or kite into four (or two) right triangles whose legs are the half-diagonals — the \\(\\dfrac12 d_1 d_2\\) formula is a shortcut for adding up those triangle areas, equivalent to a base-times-height calculation." },
      { q: "What exactly is the apothem?", a: "The perpendicular distance from the center of a regular polygon to the midpoint of one of its sides." },
      { q: "Why does the regular polygon formula resemble the triangle formula?", a: "A regular \\(n\\)-gon splits into \\(n\\) congruent isosceles triangles from its center, each with \"base\" equal to one side and \"height\" equal to the apothem. Summing those \\(n\\) triangle areas gives \\(\\dfrac12(\\text{apothem})(\\text{sum of all sides})=\\dfrac12aP\\)." },
      { q: "How do I find the area of an irregular or composite shape?", a: "Split it into pieces you can measure — triangles, rectangles, trapezoids — then add their areas (or subtract, for any pieces that are cut out)." },
      { q: "Does the trapezoid formula still work if the two bases are equal?", a: "Yes — when \\(b_1=b_2=b\\), the formula becomes \\(A=\\dfrac12(2b)(h)=bh\\), matching the parallelogram formula exactly, since an equal-base trapezoid is a parallelogram." },
    ],
  }),
]);

ch["8.4"] = L("8.4", "Perimeter and Area in the Coordinate Plane (MA.912.GR.3.4)", [
  lessonHtml({
    title: "Perimeter & Area on the Coordinate Plane",
    emoji: "🗺️",
    overview: `Once a polygon's vertices are given as coordinates, perimeter is just the distance formula applied repeatedly and added up — one trip around the figure. Area can often be found by decomposing an axis-aligned figure into rectangles and triangles, but for a general polygon (sides at any angle), the <strong>shoelace formula</strong> computes the exact area directly from the coordinates, without needing to find a height at all.`,
    toolkit: [
      `<strong>Perimeter:</strong> find the distance between each pair of consecutive vertices going around the polygon, then add all the distances.`,
      `<strong>Area by decomposition:</strong> split the polygon — especially one drawn on a grid — into rectangles, triangles, or trapezoids whose sides are easy to measure.`,
      `<strong>Shoelace formula</strong> for area, given vertices \\((x_1,y_1),(x_2,y_2),\\dots,(x_n,y_n)\\) listed in order around the polygon: \\(A=\\dfrac12\\left|\\sum(x_iy_{i+1}-x_{i+1}y_i)\\right|\\), wrapping back to \\((x_1,y_1)\\) at the end.`,
      `Always list the vertices in order (clockwise or counterclockwise) around the figure before applying either formula — skipping around describes a different shape entirely.`,
    ],
    examples: [
      {
        h: "Perimeter and area of an axis-aligned rectangle",
        p: "Rectangle \\(ABCD\\) has vertices \\(A(1,1)\\), \\(B(6,1)\\), \\(C(6,4)\\), \\(D(1,4)\\). Find its perimeter and area.",
        steps: [
          `<strong>Step 1 — Find the side lengths:</strong> \\(AB=6-1=5\\) and \\(BC=4-1=3\\) (both axis-aligned, so simple subtraction works).`,
          `<strong>Step 2 — Perimeter:</strong> \\(P=2(5+3)=16\\).`,
          `<strong>Step 3 — Area:</strong> \\(A=5(3)=15\\).`,
        ],
      },
      {
        h: "Perimeter and area of a triangle",
        p: "Triangle \\(ABC\\) has vertices \\(A(0,0)\\), \\(B(6,0)\\), \\(C(3,4)\\). Find its perimeter and area.",
        steps: [
          `<strong>Step 1 — Find the side lengths:</strong> \\(AB=6\\); \\(BC=\\sqrt{(6-3)^2+4^2}=\\sqrt{25}=5\\); \\(CA=\\sqrt{3^2+4^2}=5\\).`,
          `<strong>Step 2 — Perimeter:</strong> \\(P=6+5+5=16\\).`,
          `<strong>Step 3 — Area with base and height:</strong> base \\(AB=6\\) is horizontal, and \\(C\\) sits at height \\(4\\), so \\(A=\\dfrac12(6)(4)=12\\).`,
        ],
        check: "Shoelace formula gives the same result: \\(\\dfrac12|(0\\cdot0-6\\cdot0)+(6\\cdot4-3\\cdot0)+(3\\cdot0-0\\cdot4)|=\\dfrac12|24|=12\\). ✓",
      },
      {
        h: "Area with the shoelace formula",
        p: "Quadrilateral \\(ABCD\\) has vertices \\(A(0,0)\\), \\(B(5,0)\\), \\(C(6,4)\\), \\(D(1,3)\\), listed in order. Find its area.",
        steps: [
          `<strong>Step 1 — Compute each cross term \\(x_iy_{i+1}-x_{i+1}y_i\\):</strong> \\(A\\to B: (0)(0)-(5)(0)=0\\); \\(B\\to C: (5)(4)-(6)(0)=20\\); \\(C\\to D: (6)(3)-(1)(4)=14\\); \\(D\\to A: (1)(0)-(0)(3)=0\\).`,
          `<strong>Step 2 — Add the terms:</strong> \\(0+20+14+0=34\\).`,
          `<strong>Step 3 — Halve and take absolute value:</strong> \\(A=\\dfrac12|34|=17\\).`,
        ],
      },
      {
        h: "Area of a composite (L-shaped) figure on a grid",
        p: "An L-shaped figure has vertices \\((0,0)\\), \\((6,0)\\), \\((6,3)\\), \\((3,3)\\), \\((3,5)\\), \\((0,5)\\) in order. Find its area by decomposition.",
        steps: [
          `<strong>Step 1 — Split into two rectangles:</strong> a lower rectangle from \\((0,0)\\) to \\((6,3)\\), and an upper rectangle from \\((0,3)\\) to \\((3,5)\\).`,
          `<strong>Step 2 — Lower rectangle area:</strong> \\(6\\times3=18\\).`,
          `<strong>Step 3 — Upper rectangle area:</strong> \\(3\\times2=6\\).`,
          `<strong>Step 4 — Add:</strong> \\(18+6=24\\).`,
        ],
      },
      {
        h: "Perimeter with a diagonal side",
        p: "Triangle \\(ABC\\) has vertices \\(A(-2,1)\\), \\(B(3,1)\\), \\(C(3,-3)\\). Find its perimeter.",
        steps: [
          `<strong>Step 1 — Find \\(AB\\) (horizontal):</strong> \\(AB=3-(-2)=5\\).`,
          `<strong>Step 2 — Find \\(BC\\) (vertical):</strong> \\(BC=1-(-3)=4\\).`,
          `<strong>Step 3 — Find \\(CA\\) with the distance formula:</strong> \\(CA=\\sqrt{(3-(-2))^2+(-3-1)^2}=\\sqrt{25+16}=\\sqrt{41}\\).`,
          `<strong>Step 4 — Add:</strong> \\(P=5+4+\\sqrt{41}\\approx15.4\\).`,
        ],
      },
    ],
    practice: [
      { q: "Rectangle \\(A(0,0)\\), \\(B(8,0)\\), \\(C(8,3)\\), \\(D(0,3)\\). Find its perimeter and area.", a: "Perimeter \\(=2(8+3)=22\\); area \\(=8(3)=24\\)." },
      { q: "Triangle \\(A(0,0)\\), \\(B(4,0)\\), \\(C(0,3)\\). Find its perimeter and area.", a: "Sides \\(3\\), \\(4\\), \\(5\\); perimeter \\(=12\\); area \\(=\\dfrac12(4)(3)=6\\)." },
      { q: "Use the shoelace formula on rectangle \\(A(1,1)\\), \\(B(6,1)\\), \\(C(6,5)\\), \\(D(1,5)\\) to find the area.", a: "Cross terms: \\(-5\\), \\(24\\), \\(25\\), \\(-4\\); sum \\(=40\\); area \\(=\\dfrac{40}{2}=20\\) — matching the simple side-length check of \\(5\\times4=20\\)." },
      { q: "Quadrilateral \\(A(0,0)\\), \\(B(4,0)\\), \\(C(5,3)\\), \\(D(1,4)\\). Find its area with the shoelace formula.", a: "Cross terms: \\(0\\), \\(12\\), \\(17\\), \\(0\\); sum \\(=29\\); area \\(=\\dfrac{29}{2}=14.5\\)." },
      { q: "Triangle \\(A(1,2)\\), \\(B(7,2)\\), \\(C(4,6)\\). Find its perimeter and area.", a: "\\(AB=6\\); \\(BC=CA=\\sqrt{3^2+4^2}=5\\); perimeter \\(=16\\); area \\(=\\dfrac12(6)(4)=12\\)." },
    ],
    qa: [
      { q: "Do I need the shoelace formula for axis-aligned rectangles or right triangles?", a: "Not necessarily — for figures with horizontal or vertical sides, base-times-height or simple decomposition is usually faster. The shoelace formula shines for irregular polygons with slanted sides." },
      { q: "What does taking the absolute value in the shoelace formula accomplish?", a: "It makes the result positive no matter which direction you listed the vertices — the raw sum comes out negative if you go clockwise and positive if you go counterclockwise (or vice versa, depending on convention)." },
      { q: "Why must the vertices be listed in order around the polygon?", a: "Listing them out of order effectively traces a different (often self-intersecting) shape, which gives a meaningless or incorrect area." },
      { q: "How is finding perimeter different from finding area here?", a: "Perimeter only needs the distance formula, applied to each side and added up. Area needs a formula that accounts for the entire enclosed region — decomposition or the shoelace formula — not just the boundary lengths." },
      { q: "Can the shoelace formula give a non-integer area?", a: "Yes, absolutely — the area can be any nonnegative real number depending on the coordinates involved." },
    ],
  }),
]);

ch["8.5"] = L("8.5", "How Dilations Affect Perimeter and Area (MA.912.GR.4.3)", [
  lessonHtml({
    title: "Dilations: Perimeter & Area",
    emoji: "🔍",
    overview: `A dilation stretches or shrinks a figure by a scale factor \\(k\\), multiplying every length by \\(|k|\\) — but that doesn't mean every measurement scales the same way. Perimeter, a single sum of lengths, scales by \\(|k|\\) just like any individual length. Area, built from a <em>product</em> of two lengths, scales by \\(k^2\\). Keeping this distinction straight is the key skill of this lesson: one factor of \\(k\\) for one-dimensional measures, two factors of \\(k\\) for two-dimensional measures.`,
    toolkit: [
      `A dilation with scale factor \\(k\\) multiplies every length in a figure by \\(|k|\\).`,
      `<strong>Perimeter</strong> scales by \\(|k|\\): \\(P'=|k|\\,P\\).`,
      `<strong>Area</strong> scales by \\(k^2\\): \\(A'=k^2A\\), since area is a product of two lengths, each individually scaled by \\(k\\).`,
      `<strong>Angles are unchanged</strong> by a dilation — dilations preserve shape, only size changes, which is why the original and image are similar figures.`,
      `To compare two similar figures, find the scale factor \\(k\\) from any one pair of corresponding lengths, then apply \\(|k|\\) to other lengths or \\(k^2\\) to areas as needed.`,
    ],
    examples: [
      {
        h: "Scaling perimeter directly",
        p: "A rectangle has perimeter 20. It's dilated by a scale factor of \\(k=3\\). Find the new perimeter.",
        steps: [
          `<strong>Step 1 — Apply the perimeter scaling rule:</strong> \\(P'=|k|\\,P=3(20)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(P'=60\\).`,
        ],
      },
      {
        h: "Scaling area directly",
        p: "A triangle has area 15. It's dilated by a scale factor of \\(k=2\\). Find the new area.",
        steps: [
          `<strong>Step 1 — Apply the area scaling rule:</strong> \\(A'=k^2A=2^2(15)\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(A'=4(15)=60\\).`,
        ],
      },
      {
        h: "Finding k from an area ratio, then finding perimeter",
        p: "A figure with area 24 is dilated to an image with area 216. If the original perimeter was 20, find the new perimeter.",
        steps: [
          `<strong>Step 1 — Find \\(k^2\\):</strong> \\(k^2=\\dfrac{216}{24}=9\\), so \\(k=3\\).`,
          `<strong>Step 2 — Apply the perimeter scaling rule:</strong> \\(P'=3(20)\\).`,
          `<strong>Step 3 — Simplify:</strong> \\(P'=60\\).`,
        ],
      },
      {
        h: "Finding k from a perimeter ratio, then finding area",
        p: "A figure's perimeter goes from 8 to 28 under a dilation. If the original area was 40, find the new area.",
        steps: [
          `<strong>Step 1 — Find \\(k\\):</strong> \\(k=\\dfrac{28}{8}=3.5\\).`,
          `<strong>Step 2 — Find \\(k^2\\):</strong> \\(k^2=3.5^2=12.25\\).`,
          `<strong>Step 3 — Apply the area scaling rule:</strong> \\(A'=12.25(40)=490\\).`,
        ],
      },
      {
        h: "Using corresponding sides to compare two similar figures",
        p: "Two similar polygons have corresponding sides 4 and 10. If the smaller polygon's area is 32, find the larger polygon's area.",
        steps: [
          `<strong>Step 1 — Find the scale factor:</strong> \\(k=\\dfrac{10}{4}=2.5\\).`,
          `<strong>Step 2 — Find \\(k^2\\):</strong> \\(k^2=6.25\\).`,
          `<strong>Step 3 — Apply the area scaling rule:</strong> \\(A'=6.25(32)=200\\).`,
        ],
      },
    ],
    practice: [
      { q: "A figure has perimeter 12 and is dilated by \\(k=5\\). Find the new perimeter.", a: "\\(5(12)=60\\)." },
      { q: "A figure has area 9 and is dilated by \\(k=4\\). Find the new area.", a: "\\(4^2(9)=144\\)." },
      { q: "A figure's area goes from 50 to 450 under a dilation. Find \\(k\\).", a: "\\(k^2=\\dfrac{450}{50}=9 \\Rightarrow k=3\\)." },
      { q: "A figure's perimeter goes from 8 to 28. Find \\(k\\), then the area scale factor.", a: "\\(k=\\dfrac{28}{8}=3.5\\); area scale factor \\(=k^2=12.25\\)." },
      { q: "Two similar polygons have corresponding sides 6 and 15. If the smaller perimeter is 40, find the larger perimeter.", a: "\\(k=\\dfrac{15}{6}=2.5\\); larger perimeter \\(=2.5(40)=100\\)." },
    ],
    qa: [
      { q: "Why does area scale by \\(k^2\\) but perimeter only scales by \\(k\\)?", a: "Perimeter is a sum of lengths — each length picks up one factor of \\(k\\). Area is a product of two lengths (like base times height), so it picks up two factors of \\(k\\), giving \\(k\\times k=k^2\\)." },
      { q: "Does a negative scale factor change these rules?", a: "No — always use \\(|k|\\) for perimeter, and \\(k^2\\) (already positive regardless of the sign of \\(k\\)) for area. A negative \\(k\\) also rotates the figure \\(180^\\circ\\), but that doesn't affect the size relationships." },
      { q: "If I only know the area ratio, can I still find the perimeter ratio?", a: "Yes — take the square root of the area ratio to recover \\(k\\), and that same \\(k\\) is also the perimeter (and side-length) ratio." },
      { q: "Do angles change under a dilation?", a: "No — dilations preserve all angle measures. Only lengths change, which is exactly why a dilated figure is similar (not congruent) to the original." },
      { q: "Does this scaling rule apply only to polygons, or to any shape?", a: "Any shape, including circles and composite figures — perimeter (or circumference) always scales linearly by \\(|k|\\), and area always scales by \\(k^2\\), regardless of the shape's form." },
    ],
  }),
]);
