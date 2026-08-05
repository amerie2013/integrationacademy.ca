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

ch["6.1"] = L("6.1", "The Pythagorean Theorem and its Converse", [
  lessonHtml({
    title: "The Pythagorean Theorem and its Converse",
    emoji: "📐",
    overview: `The Pythagorean Theorem is one of the most useful facts in all of geometry: in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs, \\(a^2+b^2=c^2\\). Its converse works in reverse — if a triangle's three side lengths satisfy \\(a^2+b^2=c^2\\), the triangle must be a right triangle. Together, these two statements let you find a missing side of a right triangle, or test whether a triangle is right, acute, or obtuse just from its side lengths.`,
    toolkit: [
      `Pythagorean Theorem: in a right triangle with legs \\(a,b\\) and hypotenuse \\(c\\), \\(a^2+b^2=c^2\\).`,
      `Converse of the Pythagorean Theorem: if \\(a^2+b^2=c^2\\) for the three sides of a triangle (with \\(c\\) the longest), the triangle is a right triangle.`,
      `Classifying with the inequality version: comparing \\(a^2+b^2\\) to \\(c^2\\) (the square of the <em>longest</em> side) — if \\(a^2+b^2>c^2\\) the triangle is <strong>acute</strong>; if \\(a^2+b^2<c^2\\) the triangle is <strong>obtuse</strong>.`,
      `Common Pythagorean triples: \\((3,4,5)\\), \\((5,12,13)\\), \\((8,15,17)\\), and their whole-number multiples.`,
    ],
    figure: fig(pythagoreanFig(), "In a right triangle, a² + b² = c²."),
    examples: [
      { h: "Find the hypotenuse", p: `A right triangle has legs of length \\(6\\) and \\(8\\). Find the hypotenuse.`, fig: pythagoreanFig(),
        steps: [
        `<strong>Step 1 — apply the theorem:</strong> \\(c^2=6^2+8^2\\).`,
        `<strong>Step 2 — compute:</strong> \\(c^2=36+64=100\\).`,
        `<strong>Step 3 — take the square root:</strong> \\(c=\\sqrt{100}=10\\).`,
      ] },
      { h: "Find a missing leg", p: `A right triangle has a hypotenuse of \\(17\\) and one leg of \\(8\\). Find the other leg.`, steps: [
        `<strong>Step 1 — apply the theorem:</strong> \\(8^2+b^2=17^2\\).`,
        `<strong>Step 2 — compute the squares:</strong> \\(64+b^2=289\\).`,
        `<strong>Step 3 — isolate \\(b^2\\):</strong> \\(b^2=225\\).`,
        `<strong>Step 4 — take the square root:</strong> \\(b=15\\).`,
      ] },
      { h: "Use the Converse to test for a right triangle", p: `A triangle has sides \\(9\\), \\(12\\), and \\(15\\). Determine whether it is a right triangle.`, steps: [
        `<strong>Step 1 — identify the longest side:</strong> \\(15\\) is the longest, so it plays the role of \\(c\\).`,
        `<strong>Step 2 — compare \\(a^2+b^2\\) to \\(c^2\\):</strong> \\(9^2+12^2=81+144=225\\), and \\(15^2=225\\).`,
        `<strong>Step 3 — apply the Converse:</strong> since \\(81+144=225\\), the triangle is a <strong>right</strong> triangle.`,
      ] },
      { h: "Classify a triangle as acute or obtuse", p: `A triangle has sides \\(7\\), \\(9\\), and \\(13\\). Classify the triangle.`, steps: [
        `<strong>Step 1 — identify the longest side:</strong> \\(13\\).`,
        `<strong>Step 2 — compare:</strong> \\(7^2+9^2=49+81=130\\), and \\(13^2=169\\).`,
        `<strong>Step 3 — interpret:</strong> since \\(130<169\\) (i.e. \\(a^2+b^2<c^2\\)), the triangle is <strong>obtuse</strong>.`,
      ] },
      { h: "Apply the Pythagorean Theorem to a diagonal", p: `A rectangular garden measures \\(20\\) m by \\(21\\) m. Find the length of its diagonal.`, steps: [
        `<strong>Step 1 — recognize the right triangle:</strong> the diagonal splits the rectangle into two right triangles with legs \\(20\\) and \\(21\\).`,
        `<strong>Step 2 — apply the theorem:</strong> \\(d^2=20^2+21^2=400+441=841\\).`,
        `<strong>Step 3 — take the square root:</strong> \\(d=\\sqrt{841}=29\\) m.`,
      ] },
    ],
    practice: [
      { q: `Find the hypotenuse of a right triangle with legs \\(5\\) and \\(12\\).`, a: `\\(c=\\sqrt{25+144}=\\sqrt{169}=13\\).` },
      { q: `A right triangle has a hypotenuse of \\(25\\) and one leg of \\(7\\). Find the other leg.`, a: `\\(b=\\sqrt{625-49}=\\sqrt{576}=24\\).` },
      { q: `Is a triangle with sides \\(10\\), \\(24\\), \\(26\\) a right triangle?`, a: `Yes; \\(10^2+24^2=100+576=676=26^2\\).` },
      { q: `Classify a triangle with sides \\(6\\), \\(7\\), \\(8\\) as acute, right, or obtuse.`, a: `\\(6^2+7^2=85>8^2=64\\), so the triangle is <strong>acute</strong>.` },
      { q: `A ladder reaches \\(12\\) ft up a wall while its base is \\(5\\) ft from the wall. Find the ladder's length.`, a: `\\(\\sqrt{12^2+5^2}=\\sqrt{169}=13\\) ft.` },
    ],
    qa: [
      { q: `Does it matter which leg is \\(a\\) and which is \\(b\\)?`, a: `No — addition is commutative, so \\(a^2+b^2\\) gives the same result regardless of which leg is labeled first. The hypotenuse \\(c\\), however, must always be the side opposite the right angle.` },
      { q: `How do I know which side is the hypotenuse when using the Converse?`, a: `The hypotenuse is always the <strong>longest</strong> side — compare the sum of the squares of the two shorter sides to the square of the longest side.` },
      { q: `What if \\(a^2+b^2\\) is neither greater than, less than, nor equal to \\(c^2\\)?`, a: `That can't happen for real side lengths — the sum of two squares is always exactly greater than, less than, or equal to the third square, so a triangle is always classifiable as acute, obtuse, or right.` },
      { q: `Are Pythagorean triples the only right-triangle side lengths?`, a: `No — Pythagorean triples are just whole-number solutions; a right triangle can have legs and a hypotenuse that are irrational, like \\(1\\), \\(1\\), and \\(\\sqrt2\\).` },
      { q: `Can the Pythagorean Theorem be used on non-right triangles?`, a: `Not directly — \\(a^2+b^2=c^2\\) is only guaranteed for right triangles. For other triangles, the Law of Cosines (a later topic) generalizes this relationship.` },
    ],
  }),
]);

ch["6.2"] = L("6.2", "Special Right Triangles (45-45-90 and 30-60-90)", [
  lessonHtml({
    title: "Special Right Triangles (45-45-90 and 30-60-90)",
    emoji: "🔻",
    overview: `Two right triangles show up so often in geometry and trigonometry that their side ratios are worth memorizing outright: the 45-45-90 triangle (an isosceles right triangle) and the 30-60-90 triangle (half of an equilateral triangle). Knowing these ratios lets you find every side of these triangles instantly from just one given length — no calculator needed.`,
    toolkit: [
      `45-45-90 triangle: legs are congruent; if each leg is \\(x\\), the hypotenuse is \\(x\\sqrt2\\).`,
      `30-60-90 triangle: if the short leg (opposite \\(30^\\circ\\)) is \\(x\\), the long leg (opposite \\(60^\\circ\\)) is \\(x\\sqrt3\\), and the hypotenuse (opposite \\(90^\\circ\\)) is \\(2x\\).`,
      `A 45-45-90 triangle is an isosceles right triangle; a 30-60-90 triangle is exactly half of an equilateral triangle, split by an altitude.`,
      `Given any one side, use the ratios above to solve for \\(x\\) first, then multiply to find the other two sides.`,
    ],
    figure: fig(special4545(), "45-45-90: legs x, hypotenuse x√2."),
    examples: [
      { h: "Find the hypotenuse of a 45-45-90 triangle", p: `A 45-45-90 triangle has legs of length \\(7\\). Find the hypotenuse.`, fig: special4545(),
        steps: [
        `<strong>Step 1 — apply the ratio:</strong> hypotenuse \\(=\\text{leg}\\times\\sqrt2\\).`,
        `<strong>Step 2 — substitute:</strong> hypotenuse \\(=7\\sqrt2\\).`,
      ] },
      { h: "Find the legs of a 45-45-90 triangle from the hypotenuse", p: `A 45-45-90 triangle has a hypotenuse of \\(12\\sqrt2\\). Find the length of each leg.`, steps: [
        `<strong>Step 1 — set up the ratio equation:</strong> \\(x\\sqrt2=12\\sqrt2\\).`,
        `<strong>Step 2 — solve for x:</strong> divide both sides by \\(\\sqrt2\\): \\(x=12\\).`,
        `<strong>Step 3 — state the answer:</strong> each leg is \\(12\\).`,
      ] },
      { h: "Find all sides of a 30-60-90 triangle from the short leg", p: `A 30-60-90 triangle has a short leg (opposite the \\(30^\\circ\\) angle) of length \\(5\\). Find the long leg and the hypotenuse.`, fig: special3060(),
        steps: [
        `<strong>Step 1 — identify x:</strong> \\(x=5\\) (the short leg).`,
        `<strong>Step 2 — find the long leg:</strong> \\(x\\sqrt3=5\\sqrt3\\).`,
        `<strong>Step 3 — find the hypotenuse:</strong> \\(2x=10\\).`,
      ] },
      { h: "Work backward from the long leg", p: `A 30-60-90 triangle has a long leg (opposite \\(60^\\circ\\)) of length \\(9\\sqrt3\\). Find the short leg and the hypotenuse.`, steps: [
        `<strong>Step 1 — set up the ratio equation:</strong> \\(x\\sqrt3=9\\sqrt3\\).`,
        `<strong>Step 2 — solve for x:</strong> \\(x=9\\).`,
        `<strong>Step 3 — find the hypotenuse:</strong> \\(2x=18\\).`,
      ] },
      { h: "Work backward from the hypotenuse", p: `A 30-60-90 triangle has a hypotenuse of \\(16\\). Find the short leg and the long leg.`, steps: [
        `<strong>Step 1 — set up the ratio equation:</strong> \\(2x=16\\).`,
        `<strong>Step 2 — solve for x (the short leg):</strong> \\(x=8\\).`,
        `<strong>Step 3 — find the long leg:</strong> \\(x\\sqrt3=8\\sqrt3\\).`,
      ] },
    ],
    practice: [
      { q: `A 45-45-90 triangle has legs of length \\(10\\). Find the hypotenuse.`, a: `\\(10\\sqrt2\\).` },
      { q: `A 45-45-90 triangle has a hypotenuse of \\(9\\sqrt2\\). Find each leg.`, a: `Each leg is \\(9\\).` },
      { q: `A 30-60-90 triangle has a short leg of \\(6\\). Find the long leg and hypotenuse.`, a: `Long leg \\(=6\\sqrt3\\); hypotenuse \\(=12\\).` },
      { q: `A 30-60-90 triangle has a long leg of \\(4\\sqrt3\\). Find the short leg and hypotenuse.`, a: `Short leg \\(=4\\); hypotenuse \\(=8\\).` },
      { q: `A 30-60-90 triangle has a hypotenuse of \\(20\\). Find the short leg and long leg.`, a: `Short leg \\(=10\\); long leg \\(=10\\sqrt3\\).` },
    ],
    qa: [
      { q: `Why is a 45-45-90 triangle always isosceles?`, a: `Its two acute angles are congruent (\\(45^\\circ\\) each), so by the Converse of the Base Angles Theorem, the sides opposite them (the legs) are also congruent.` },
      { q: `Where does the 30-60-90 ratio come from?`, a: `Drop an altitude from one vertex of an equilateral triangle to the opposite side. It bisects that side and the vertex angle, creating two congruent 30-60-90 triangles whose sides come directly from the equilateral triangle's side length and the Pythagorean Theorem.` },
      { q: `Which side is opposite the \\(30^\\circ\\) angle — the short or long leg?`, a: `The short leg is always opposite the smallest angle, \\(30^\\circ\\); the long leg is opposite \\(60^\\circ\\), and the hypotenuse is opposite the right angle.` },
      { q: `Do I have to memorize both ratios separately, or is there a shortcut?`, a: `They're worth memorizing separately since they come from different shapes (a square cut along its diagonal vs. an equilateral triangle cut by an altitude) — but both let you find every side from a single given length.` },
      { q: `What should I do if I'm given the hypotenuse of a 45-45-90 triangle and need a leg?`, a: `Divide the hypotenuse by \\(\\sqrt2\\) (equivalently, multiply by \\(\\dfrac{\\sqrt2}{2}\\)) to undo the multiplication in the ratio.` },
    ],
  }),
]);

ch["6.3"] = L("6.3", "The Sine, Cosine, and Tangent Ratios (MA.912.T.1.2)", [
  lessonHtml({
    title: "The Sine, Cosine, and Tangent Ratios",
    emoji: "📊",
    overview: `For any acute angle in a right triangle, the ratios between its sides are fixed — no matter the triangle's size, as long as the angle stays the same (a direct consequence of AA similarity). These three ratios are the sine, cosine, and tangent functions, and the mnemonic SOH-CAH-TOA keeps them straight. They form the foundation of trigonometry: given an angle and one side, you can find any other side, and given two sides, you can find the angle.`,
    toolkit: [
      `\\(\\sin(\\theta)=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}\\), \\(\\cos(\\theta)=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}\\), \\(\\tan(\\theta)=\\dfrac{\\text{opposite}}{\\text{adjacent}}\\) — remember with <strong>SOH-CAH-TOA</strong>.`,
      `"Opposite" and "adjacent" are defined relative to the reference angle \\(\\theta\\); the hypotenuse is always opposite the right angle.`,
      `These ratios are constant for a given angle measure because all right triangles containing that angle are similar (AA Similarity).`,
      `Use a calculator in degree mode to evaluate \\(\\sin\\), \\(\\cos\\), \\(\\tan\\) of a given angle, or their inverses (\\(\\sin^{-1}\\), \\(\\cos^{-1}\\), \\(\\tan^{-1}\\)) to find an angle from a ratio.`,
    ],
    figure: fig(sohcahtoa(), "SOH-CAH-TOA relative to the marked acute angle."),
    examples: [
      { h: "Identify opposite, adjacent, and hypotenuse", p: `In right \\(\\triangle ABC\\) with the right angle at \\(C\\), find \\(\\sin(A)\\), \\(\\cos(A)\\), and \\(\\tan(A)\\) if \\(a=BC=6\\) (opposite \\(A\\)), \\(b=AC=8\\) (adjacent to \\(A\\)), and \\(c=AB=10\\) (hypotenuse).`, fig: sohcahtoa(),
        steps: [
        `<strong>Step 1 — apply SOH:</strong> \\(\\sin(A)=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}=\\dfrac{6}{10}=\\dfrac{3}{5}\\).`,
        `<strong>Step 2 — apply CAH:</strong> \\(\\cos(A)=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}=\\dfrac{8}{10}=\\dfrac{4}{5}\\).`,
        `<strong>Step 3 — apply TOA:</strong> \\(\\tan(A)=\\dfrac{\\text{opposite}}{\\text{adjacent}}=\\dfrac{6}{8}=\\dfrac{3}{4}\\).`,
      ] },
      { h: "Find a missing side using sine", p: `In a right triangle, an acute angle measures \\(35^\\circ\\), and the hypotenuse is \\(20\\). Find the side opposite the \\(35^\\circ\\) angle.`, steps: [
        `<strong>Step 1 — choose the ratio that relates opposite and hypotenuse:</strong> \\(\\sin(35^\\circ)=\\dfrac{\\text{opposite}}{20}\\).`,
        `<strong>Step 2 — solve for the opposite side:</strong> opposite \\(=20\\sin(35^\\circ)\\).`,
        `<strong>Step 3 — evaluate:</strong> opposite \\(\\approx20(0.5736)\\approx11.5\\).`,
      ] },
      { h: "Find a missing side using tangent", p: `In a right triangle, an acute angle measures \\(52^\\circ\\), and the adjacent side is \\(9\\). Find the side opposite the \\(52^\\circ\\) angle.`, steps: [
        `<strong>Step 1 — choose the ratio that relates opposite and adjacent:</strong> \\(\\tan(52^\\circ)=\\dfrac{\\text{opposite}}{9}\\).`,
        `<strong>Step 2 — solve:</strong> opposite \\(=9\\tan(52^\\circ)\\).`,
        `<strong>Step 3 — evaluate:</strong> opposite \\(\\approx9(1.2799)\\approx11.5\\).`,
      ] },
      { h: "Find an angle using an inverse trig ratio", p: `A right triangle has a leg of \\(7\\) opposite an acute angle \\(\\theta\\), and a hypotenuse of \\(25\\). Find \\(\\theta\\) to the nearest degree.`, steps: [
        `<strong>Step 1 — set up the ratio:</strong> \\(\\sin(\\theta)=\\dfrac{7}{25}=0.28\\).`,
        `<strong>Step 2 — apply the inverse sine:</strong> \\(\\theta=\\sin^{-1}(0.28)\\).`,
        `<strong>Step 3 — evaluate:</strong> \\(\\theta\\approx16^\\circ\\).`,
      ] },
      { h: "Confirm the ratio is the same across similar triangles", p: `Two right triangles both contain a \\(30^\\circ\\) angle: one has opposite \\(=5\\), hypotenuse \\(=10\\); the other has opposite \\(=8\\), hypotenuse \\(=16\\). Show that \\(\\sin(30^\\circ)\\) is the same for both.`, steps: [
        `<strong>Step 1 — compute the first ratio:</strong> \\(\\dfrac{5}{10}=0.5\\).`,
        `<strong>Step 2 — compute the second ratio:</strong> \\(\\dfrac{8}{16}=0.5\\).`,
        `<strong>Step 3 — conclude:</strong> both equal \\(0.5=\\sin(30^\\circ)\\), confirming that the sine ratio depends only on the angle, not the triangle's size (the two triangles are similar by AA).`,
      ] },
    ],
    practice: [
      { q: `In a right triangle, the side opposite an angle is \\(9\\) and the hypotenuse is \\(15\\). Find \\(\\sin(\\theta)\\).`, a: `\\(\\dfrac{9}{15}=\\dfrac{3}{5}\\).` },
      { q: `An acute angle measures \\(40^\\circ\\) with an adjacent side of \\(12\\). Find the hypotenuse.`, a: `\\(\\cos(40^\\circ)=\\dfrac{12}{h}\\Rightarrow h=\\dfrac{12}{\\cos(40^\\circ)}\\approx15.7\\).` },
      { q: `An acute angle measures \\(28^\\circ\\) with an opposite side of \\(6\\). Find the adjacent side.`, a: `\\(\\tan(28^\\circ)=\\dfrac{6}{\\text{adj}}\\Rightarrow \\text{adj}=\\dfrac{6}{\\tan(28^\\circ)}\\approx11.3\\).` },
      { q: `A right triangle has opposite \\(=10\\) and adjacent \\(=24\\) for angle \\(\\theta\\). Find \\(\\theta\\) to the nearest degree.`, a: `\\(\\theta=\\tan^{-1}\\left(\\dfrac{10}{24}\\right)\\approx23^\\circ\\).` },
      { q: `A right triangle has a hypotenuse of \\(13\\) and a leg (adjacent to \\(\\theta\\)) of \\(5\\). Find \\(\\cos(\\theta)\\) and \\(\\theta\\) to the nearest degree.`, a: `\\(\\cos(\\theta)=\\dfrac{5}{13}\\approx0.3846\\); \\(\\theta\\approx67^\\circ\\).` },
    ],
    qa: [
      { q: `What does SOH-CAH-TOA stand for?`, a: `<strong>S</strong>ine \\(=\\) <strong>O</strong>pposite/<strong>H</strong>ypotenuse; <strong>C</strong>osine \\(=\\) <strong>A</strong>djacent/<strong>H</strong>ypotenuse; <strong>T</strong>angent \\(=\\) <strong>O</strong>pposite/<strong>A</strong>djacent.` },
      { q: `Why is the sine of a given angle the same in every right triangle that contains it?`, a: `Any two right triangles sharing that acute angle (and the right angle) are similar by AA Similarity, so their corresponding side ratios — including opposite/hypotenuse — must be equal.` },
      { q: `How do I decide which ratio (sine, cosine, or tangent) to use?`, a: `Identify which two sides you know or want (relative to the reference angle) — opposite and hypotenuse means sine, adjacent and hypotenuse means cosine, opposite and adjacent means tangent.` },
      { q: `When do I use an inverse trig function instead of sine, cosine, or tangent directly?`, a: `When you know two sides and need to find the angle itself, rather than knowing the angle and needing a side.` },
      { q: `Do "opposite" and "adjacent" ever switch for the two acute angles in the same right triangle?`, a: `Yes — each acute angle has its own opposite and adjacent leg; the leg that is "opposite" one acute angle is "adjacent" to the other.` },
    ],
  }),
]);

ch["6.4"] = L("6.4", "Solving Right Triangles Using Trigonometry", [
  lessonHtml({
    title: "Solving Right Triangles Using Trigonometry",
    emoji: "🧮",
    overview: `"Solving a right triangle" means finding every missing side and angle measure once you know enough information — typically one side and one acute angle, or two sides. Combine the Pythagorean Theorem, the Triangle Angle-Sum Theorem, and the sine/cosine/tangent ratios to find everything else, always working from what is known toward what is unknown.`,
    toolkit: [
      `A right triangle is fully "solved" once all three side lengths and all three angle measures are known.`,
      `Given one acute angle and one side: find the other acute angle by subtracting from \\(90^\\circ\\), then use sine, cosine, or tangent (whichever relates a known side to an unknown one) to find the remaining sides.`,
      `Given two sides: use the Pythagorean Theorem to find the third side, then use an inverse trig ratio to find one acute angle, and subtract from \\(90^\\circ\\) for the other.`,
      `Keep extra decimal places through intermediate steps to avoid compounding rounding error; round only the final answers.`,
    ],
    figure: fig(sohcahtoa(), "Choose sine, cosine, or tangent from the given information."),
    examples: [
      { h: "Solve a right triangle given an angle and the hypotenuse", p: `In right \\(\\triangle ABC\\) (right angle at \\(C\\)), \\(\\angle A=38^\\circ\\) and hypotenuse \\(c=AB=14\\). Solve the triangle (find \\(\\angle B\\), \\(a\\), and \\(b\\)).`, steps: [
        `<strong>Step 1 — find \\(\\angle B\\):</strong> \\(\\angle B=90^\\circ-38^\\circ=52^\\circ\\).`,
        `<strong>Step 2 — find \\(a\\) (opposite \\(A\\)) using sine:</strong> \\(a=c\\sin(38^\\circ)=14\\sin(38^\\circ)\\approx8.6\\).`,
        `<strong>Step 3 — find \\(b\\) (adjacent to \\(A\\)) using cosine:</strong> \\(b=c\\cos(38^\\circ)=14\\cos(38^\\circ)\\approx11.0\\).`,
      ], check: `Check with Pythagoras: \\(8.6^2+11.0^2\\approx73.96+121=194.96\\approx14^2=196\\) (small rounding difference). ✓` },
      { h: "Solve a right triangle given an angle and a leg", p: `In right \\(\\triangle DEF\\) (right angle at \\(F\\)), \\(\\angle D=62^\\circ\\) and leg \\(DF=10\\) (adjacent to \\(D\\)). Solve the triangle (find \\(\\angle E\\), \\(EF\\), and \\(DE\\)).`, steps: [
        `<strong>Step 1 — find \\(\\angle E\\):</strong> \\(\\angle E=90^\\circ-62^\\circ=28^\\circ\\).`,
        `<strong>Step 2 — find \\(EF\\) (opposite \\(D\\)) using tangent:</strong> \\(\\tan(62^\\circ)=\\dfrac{EF}{10}\\Rightarrow EF=10\\tan(62^\\circ)\\approx18.8\\).`,
        `<strong>Step 3 — find \\(DE\\) (hypotenuse) using cosine:</strong> \\(\\cos(62^\\circ)=\\dfrac{10}{DE}\\Rightarrow DE=\\dfrac{10}{\\cos(62^\\circ)}\\approx21.3\\).`,
      ] },
      { h: "Solve a right triangle given two legs", p: `In right \\(\\triangle GHI\\) (right angle at \\(I\\)), legs \\(GI=9\\) and \\(HI=12\\). Solve the triangle (find \\(GH\\), \\(\\angle G\\), and \\(\\angle H\\)).`, steps: [
        `<strong>Step 1 — find the hypotenuse with the Pythagorean Theorem:</strong> \\(GH=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15\\).`,
        `<strong>Step 2 — find \\(\\angle H\\) (opposite the leg \\(GI=9\\)) using inverse sine:</strong> \\(\\sin(H)=\\dfrac{9}{15}=0.6\\Rightarrow \\angle H=\\sin^{-1}(0.6)\\approx36.9^\\circ\\).`,
        `<strong>Step 3 — find \\(\\angle G\\):</strong> \\(\\angle G=90^\\circ-36.9^\\circ\\approx53.1^\\circ\\).`,
      ] },
      { h: "Solve a right triangle given the hypotenuse and one leg", p: `In right \\(\\triangle JKL\\) (right angle at \\(K\\)), hypotenuse \\(JL=26\\) and leg \\(JK=10\\). Solve the triangle (find \\(KL\\), \\(\\angle J\\), and \\(\\angle L\\)).`, steps: [
        `<strong>Step 1 — find \\(KL\\) with the Pythagorean Theorem:</strong> \\(KL=\\sqrt{26^2-10^2}=\\sqrt{676-100}=\\sqrt{576}=24\\).`,
        `<strong>Step 2 — find \\(\\angle L\\) (opposite the leg \\(JK=10\\)) using inverse sine:</strong> \\(\\sin(L)=\\dfrac{10}{26}\\approx0.3846\\Rightarrow \\angle L\\approx22.6^\\circ\\).`,
        `<strong>Step 3 — find \\(\\angle J\\):</strong> \\(\\angle J=90^\\circ-22.6^\\circ\\approx67.4^\\circ\\).`,
      ] },
      { h: "Double-check a solved triangle for consistency", p: `A right triangle is reported to have \\(\\angle A=30^\\circ\\), \\(\\angle B=60^\\circ\\), leg \\(a=5\\) (opposite \\(A\\)), leg \\(b=5\\sqrt3\\) (opposite \\(B\\)), and hypotenuse \\(c=10\\). Verify all values are consistent.`, steps: [
        `<strong>Step 1 — check the angle sum:</strong> \\(30^\\circ+60^\\circ+90^\\circ=180^\\circ\\). ✓`,
        `<strong>Step 2 — check the Pythagorean Theorem:</strong> \\(5^2+(5\\sqrt3)^2=25+75=100=10^2\\). ✓`,
        `<strong>Step 3 — check the trig ratio:</strong> \\(\\sin(30^\\circ)=\\dfrac{5}{10}=0.5\\), which matches the known value \\(\\sin(30^\\circ)=0.5\\). ✓`,
        `<strong>Step 4 — conclude:</strong> this is exactly a 30-60-90 special right triangle, and every value checks out.`,
      ] },
    ],
    practice: [
      { q: `In a right triangle, \\(\\angle A=25^\\circ\\) and the hypotenuse is \\(18\\). Find the side opposite \\(\\angle A\\).`, a: `\\(18\\sin(25^\\circ)\\approx7.6\\).` },
      { q: `In a right triangle, \\(\\angle A=48^\\circ\\) and the adjacent leg is \\(6\\). Find the hypotenuse.`, a: `\\(\\dfrac{6}{\\cos(48^\\circ)}\\approx9.0\\).` },
      { q: `In a right triangle, the legs are \\(7\\) and \\(24\\). Find the hypotenuse and the smaller acute angle.`, a: `Hypotenuse \\(=\\sqrt{49+576}=\\sqrt{625}=25\\); smaller angle \\(=\\sin^{-1}\\left(\\dfrac{7}{25}\\right)\\approx16.3^\\circ\\).` },
      { q: `In a right triangle, the hypotenuse is \\(20\\) and one leg is \\(16\\). Find the other leg and both acute angles.`, a: `Other leg \\(=\\sqrt{400-256}=\\sqrt{144}=12\\); angles \\(\\approx\\sin^{-1}(0.8)\\approx53.1^\\circ\\) and \\(\\approx36.9^\\circ\\).` },
      { q: `Why should you avoid rounding trig values in the middle of a multi-step "solve the triangle" problem?`, a: `Rounding early compounds error through each subsequent calculation — round only the final reported answers to keep results accurate.` },
    ],
    qa: [
      { q: `What information is enough to "solve" a right triangle?`, a: `Any one acute angle plus one side, or any two sides — the right angle itself is already known.` },
      { q: `What is the fastest way to find the second acute angle once I know the first?`, a: `Subtract from \\(90^\\circ\\), since the two acute angles of a right triangle are always complementary.` },
      { q: `If I'm given two legs, which trig function should I use to find an angle?`, a: `Tangent, since \\(\\tan(\\theta)=\\dfrac{\\text{opposite}}{\\text{adjacent}}\\) uses exactly the two legs directly — no Pythagorean Theorem needed first.` },
      { q: `Should I use the Pythagorean Theorem or trig first when given two sides?`, a: `Use the Pythagorean Theorem first to find the third side, then use an inverse trig ratio (with any two sides now known) to find an angle.` },
      { q: `How can I check my final answer for a solved triangle?`, a: `Verify the three angles sum to \\(180^\\circ\\) and that the three sides satisfy the Pythagorean Theorem — both should hold if every value is correct.` },
    ],
  }),
]);

ch["6.5"] = L("6.5", "Real-World Applications: Angles of Elevation and Depression (MA.912.T.1.2)", [
  lessonHtml({
    title: "Real-World Applications: Angles of Elevation and Depression",
    emoji: "🗼",
    overview: `An angle of elevation is measured upward from a horizontal line of sight to an object above; an angle of depression is measured downward from a horizontal line of sight to an object below. Because the horizontal lines of sight from two observers looking at each other are parallel, the angle of elevation from one point equals the angle of depression from the other (alternate interior angles). These angles turn heights, distances, and viewpoints into solvable right-triangle trigonometry problems.`,
    toolkit: [
      `Angle of elevation: measured upward from the horizontal to the line of sight toward a higher object.`,
      `Angle of depression: measured downward from the horizontal to the line of sight toward a lower object.`,
      `The angle of elevation from point A to point B equals the angle of depression from point B to point A (alternate interior angles on parallel horizontal lines).`,
      `Draw a diagram first: mark the horizontal line, the angle, and the right triangle formed by the vertical height and horizontal distance — then apply sine, cosine, or tangent.`,
    ],
    figure: fig(elevationFig(), "An angle of elevation is measured up from the horizontal."),
    examples: [
      { h: "Find a height using the angle of elevation", p: `From a point \\(40\\) m from the base of a tower, the angle of elevation to the top is \\(52^\\circ\\). Find the height of the tower.`, fig: elevationFig(),
        steps: [
        `<strong>Step 1 — sketch the right triangle:</strong> the horizontal distance (\\(40\\) m) is adjacent to the \\(52^\\circ\\) angle; the tower's height is opposite.`,
        `<strong>Step 2 — choose tangent (opposite/adjacent):</strong> \\(\\tan(52^\\circ)=\\dfrac{h}{40}\\).`,
        `<strong>Step 3 — solve:</strong> \\(h=40\\tan(52^\\circ)\\approx51.2\\) m.`,
      ] },
      { h: "Find a distance using the angle of depression", p: `A lighthouse keeper standing \\(60\\) m above sea level sees a boat at an angle of depression of \\(15^\\circ\\). Find the boat's horizontal distance from the base of the lighthouse.`, steps: [
        `<strong>Step 1 — use the alternate interior angle relationship:</strong> the angle of elevation from the boat up to the keeper also equals \\(15^\\circ\\).`,
        `<strong>Step 2 — sketch the right triangle:</strong> the height (\\(60\\) m) is opposite the \\(15^\\circ\\) angle at the boat; the horizontal distance \\(d\\) is adjacent.`,
        `<strong>Step 3 — choose tangent:</strong> \\(\\tan(15^\\circ)=\\dfrac{60}{d}\\).`,
        `<strong>Step 4 — solve:</strong> \\(d=\\dfrac{60}{\\tan(15^\\circ)}\\approx223.9\\) m.`,
      ] },
      { h: "Find the angle of elevation given height and distance", p: `A drone hovers \\(80\\) m above the ground, directly above a point \\(150\\) m from an observer. Find the angle of elevation from the observer to the drone.`, steps: [
        `<strong>Step 1 — sketch the right triangle:</strong> the height \\(80\\) m is opposite the angle of elevation; the horizontal distance \\(150\\) m is adjacent.`,
        `<strong>Step 2 — choose inverse tangent:</strong> \\(\\theta=\\tan^{-1}\\left(\\dfrac{80}{150}\\right)\\).`,
        `<strong>Step 3 — evaluate:</strong> \\(\\theta\\approx28.1^\\circ\\).`,
      ] },
      { h: "Use the angle of elevation with the hypotenuse (a guy wire)", p: `A guy wire is anchored to the ground \\(25\\) m from the base of a pole and makes an angle of elevation of \\(58^\\circ\\) with the ground. Find the length of the wire.`, steps: [
        `<strong>Step 1 — identify the sides:</strong> the \\(25\\) m distance is adjacent to \\(58^\\circ\\); the wire itself is the hypotenuse.`,
        `<strong>Step 2 — choose cosine (adjacent/hypotenuse):</strong> \\(\\cos(58^\\circ)=\\dfrac{25}{L}\\).`,
        `<strong>Step 3 — solve:</strong> \\(L=\\dfrac{25}{\\cos(58^\\circ)}\\approx47.2\\) m.`,
      ] },
      { h: "Combine two angles of elevation to find a height", p: `From a point on the ground, the angle of elevation to the top of a building is \\(35^\\circ\\). From a point \\(50\\) m closer to the building, the angle of elevation is \\(50^\\circ\\). Find the height of the building.`, steps: [
        `<strong>Step 1 — set up two equations using the unknown distance \\(x\\) from the closer point:</strong> \\(\\tan(50^\\circ)=\\dfrac{h}{x}\\) and \\(\\tan(35^\\circ)=\\dfrac{h}{x+50}\\).`,
        `<strong>Step 2 — substitute \\(x=\\dfrac{h}{\\tan(50^\\circ)}\\) into the second equation:</strong> \\(\\tan(35^\\circ)=\\dfrac{h}{\\frac{h}{\\tan(50^\\circ)}+50}\\).`,
        `<strong>Step 3 — solve numerically:</strong> using \\(\\tan(50^\\circ)\\approx1.1918\\) and \\(\\tan(35^\\circ)\\approx0.7002\\), this gives \\(h\\approx84.9\\) m.`,
      ], check: `Check: \\(x=\\dfrac{84.9}{1.1918}\\approx71.2\\) m, and \\(\\dfrac{84.9}{71.2+50}\\approx0.700\\approx\\tan(35^\\circ)\\). ✓` },
    ],
    practice: [
      { q: `From a point \\(30\\) m from the base of a flagpole, the angle of elevation to the top is \\(40^\\circ\\). Find the height of the flagpole.`, a: `\\(30\\tan(40^\\circ)\\approx25.2\\) m.` },
      { q: `A pilot flying at an altitude of \\(2000\\) m sees an airport at an angle of depression of \\(8^\\circ\\). Find the horizontal distance to the airport.`, a: `\\(\\dfrac{2000}{\\tan(8^\\circ)}\\approx14{,}230\\) m.` },
      { q: `A person \\(1.7\\) m tall stands \\(20\\) m from a tree and measures an angle of elevation of \\(28^\\circ\\) to the top of the tree. Find the tree's total height (include the observer's eye height).`, a: `Height above eye level \\(=20\\tan(28^\\circ)\\approx10.6\\) m; total height \\(\\approx10.6+1.7=12.3\\) m.` },
      { q: `A skateboard ramp rises at an angle of elevation of \\(20^\\circ\\) and has a horizontal base of \\(6\\) m. Find the length of the ramp's sloped surface.`, a: `\\(\\dfrac{6}{\\cos(20^\\circ)}\\approx6.4\\) m.` },
      { q: `The angle of elevation from a ship to the top of a \\(120\\)-m cliff is \\(18^\\circ\\). Find the ship's distance from the base of the cliff.`, a: `\\(\\dfrac{120}{\\tan(18^\\circ)}\\approx369.2\\) m.` },
    ],
    qa: [
      { q: `What is the difference between angle of elevation and angle of depression?`, a: `Both are measured from a horizontal line of sight — elevation looks upward to something higher, while depression looks downward to something lower.` },
      { q: `Why are the angle of elevation and angle of depression between the same two points always equal?`, a: `The two horizontal lines of sight (one at each point) are parallel, and the line connecting the two points is a transversal — making the elevation and depression angles alternate interior angles, which are congruent.` },
      { q: `What is the most common mistake when setting up these problems?`, a: `Mislabeling which side is opposite versus adjacent to the given angle — always draw the right triangle first and mark the horizontal, vertical, and given angle clearly.` },
      { q: `Do I need to account for an observer's height in these problems?`, a: `Yes, when the problem specifies eye height above the ground — the trig ratio only gives the vertical rise <em>above eye level</em>, so add the observer's height for the total height of the object.` },
      { q: `What if I'm given two different angles of elevation from two different distances?`, a: `Set up two separate tangent equations (one per observation point) sharing the same unknown height, then solve the resulting system — as in the two-angle "building height" example.` },
    ],
  }),
]);
