import { fig, triABC, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "5.4",
  title: "Triangle Proportionality",
  intro: "The <b>Triangle Proportionality Theorem</b> (Side-Splitter Theorem) says: if a line parallel to one side of a triangle intersects the other two sides, it divides those sides proportionally. For $\\overline{DE}\\parallel\\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$, this gives $\\dfrac{AD}{DB}=\\dfrac{AE}{EC}$, or equivalently the \"whole-to-part\" form $\\dfrac{AD}{AB}=\\dfrac{AE}{AC}$. The <b>converse</b> is also true: if a line divides two sides proportionally, it must be parallel to the third side. A useful corollary extends this to <b>three or more parallel lines</b>: they cut any two transversals into proportional segments. A special case is the <b>Midsegment Theorem</b>: the segment joining the midpoints of two sides is parallel to the third side and exactly half its length. This worksheet applies these ideas numerically, algebraically, and with a coordinate proof.",
  examples: [
    ["Example 1: Find a segment (part-to-part form)",
      "In $\\triangle ABC$, $\\overline{DE}\\parallel\\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. If $AD=4$, $DB=6$, $AE=6$, find $EC$.",
      fig(triABC(), "$\\overline{DE}$ parallel to the base splits both other sides proportionally.") +
      "Identify the theorem: since $\\overline{DE}\\parallel\\overline{BC}$, $\\dfrac{AD}{DB}=\\dfrac{AE}{EC}$.<br>" +
      "Substitute: $\\dfrac{4}{6}=\\dfrac{6}{EC}$<br>" +
      "Cross-multiply: $4\\cdot EC=36$<br>" +
      "$EC=9$.<br>" +
      "<b>Answer:</b> $EC=9$."],

    ["Example 2: Find a segment (whole-to-part form)",
      "$\\overline{DE}\\parallel\\overline{BC}$, $AD=3$, $AB=8$, $AE=6$. Find $AC$.",
      "Use the whole-to-part form: $\\dfrac{AD}{AB}=\\dfrac{AE}{AC}$<br>" +
      "$\\dfrac{3}{8}=\\dfrac{6}{AC}$<br>" +
      "Cross-multiply: $3\\cdot AC=48$<br>" +
      "$AC=16$.<br>" +
      "<b>Answer:</b> $AC=16$."],

    ["Example 3: Converse — test for parallel",
      "In $\\triangle ABC$, $AD=5$, $DB=10$, $AE=4$, $EC=8$. Is $\\overline{DE}\\parallel\\overline{BC}$?",
      "Compute both ratios: $\\dfrac{AD}{DB}=\\dfrac{5}{10}=\\dfrac{1}{2}$ and $\\dfrac{AE}{EC}=\\dfrac{4}{8}=\\dfrac{1}{2}$.<br>" +
      "The ratios are equal.<br>" +
      "<b>Conclusion:</b> Yes — by the Converse of the Triangle Proportionality Theorem, $\\overline{DE}\\parallel\\overline{BC}$."],

    ["Example 4: Converse — not parallel",
      "$AD=3$, $DB=5$, $AE=4$, $EC=6$. Is $\\overline{DE}\\parallel\\overline{BC}$?",
      "Compute both ratios: $\\dfrac{AD}{DB}=\\dfrac{3}{5}=0.6$ and $\\dfrac{AE}{EC}=\\dfrac{4}{6}\\approx0.667$.<br>" +
      "The ratios are not equal.<br>" +
      "<b>Conclusion:</b> No — $\\overline{DE}$ is not parallel to $\\overline{BC}$."],

    ["Example 5: Midsegment — coordinate proof",
      "Triangle has vertices $A(0,0)$, $B(8,0)$, $C(2,6)$. Let $M$ be the midpoint of $\\overline{AB}$ and $N$ be the midpoint of $\\overline{AC}$. Show $\\overline{MN}\\parallel\\overline{BC}$ and $MN=\\tfrac{1}{2}BC$.",
      fig(coordPts([{ x: 0, y: 0, label: "A" }, { x: 8, y: 0, label: "B" }, { x: 2, y: 6, label: "C" }], { xmin: -1, xmax: 9, ymin: -1, ymax: 7 }), "$M$ and $N$ are the midpoints of $\\overline{AB}$ and $\\overline{AC}$.") +
      "Find the midpoints: $M=\\left(\\dfrac{0+8}{2},0\\right)=(4,0)$; $\\quad N=\\left(\\dfrac{0+2}{2},\\dfrac{0+6}{2}\\right)=(1,3)$.<br>" +
      "Slope of $\\overline{BC}$: $\\dfrac{6-0}{2-8}=\\dfrac{6}{-6}=-1$. Slope of $\\overline{MN}$: $\\dfrac{3-0}{1-4}=\\dfrac{3}{-3}=-1$ — equal, so $\\overline{MN}\\parallel\\overline{BC}$.<br>" +
      "Length of $\\overline{BC}=\\sqrt{6^{2}+6^{2}}=6\\sqrt{2}$; length of $\\overline{MN}=\\sqrt{3^{2}+3^{2}}=3\\sqrt{2}$.<br>" +
      "$\\dfrac{MN}{BC}=\\dfrac{3\\sqrt{2}}{6\\sqrt{2}}=\\dfrac{1}{2}$.<br>" +
      "<b>Conclusion:</b> $\\overline{MN}\\parallel\\overline{BC}$ and $MN=\\tfrac{1}{2}BC$, confirming the Midsegment Theorem."],

    ["Example 6: Solve for $x$",
      "$\\overline{DE}\\parallel\\overline{BC}$, $AD=x$, $DB=6$, $AE=4$, $EC=8$. Find $x$.",
      "Set up the proportion: $\\dfrac{x}{6}=\\dfrac{4}{8}=\\dfrac{1}{2}$<br>" +
      "Cross-multiply: $2x=6$<br>" +
      "$x=3$.<br>" +
      "<b>Answer:</b> $x=3$."],

    ["Example 7: Three parallel lines corollary",
      "Three parallel lines cut two transversals, creating segments $4$ and $6$ on the first transversal, and $6$ and $x$ on the second (matched in the same order). Find $x$.",
      "By the corollary to the Triangle Proportionality Theorem, three or more parallel lines cut any two transversals proportionally:<br>" +
      "$\\dfrac{4}{6}=\\dfrac{6}{x}$<br>" +
      "Cross-multiply: $4x=36$<br>" +
      "$x=9$.<br>" +
      "<b>Answer:</b> $x=9$."],

    ["Example 8: Midsegment length",
      "The midsegment of a triangle joins the midpoints of two sides. If the third side is $18$, find the midsegment's length, and state which side it is parallel to.",
      "By the Midsegment Theorem, the midsegment is half the length of the third side and parallel to it:<br>" +
      "Midsegment $=\\dfrac{1}{2}\\times18=9$.<br>" +
      "<b>Answer:</b> length $9$, parallel to the third side (the one not touched by either midpoint)."],

    ["Example 9: Proportion in a labeled triangle",
      "$\\overline{FG}\\parallel\\overline{XY}$ in $\\triangle WXY$, with $WF=9$, $FX=3$, $WG=12$. Find $GY$.",
      "Set up the proportion: $\\dfrac{WF}{FX}=\\dfrac{WG}{GY}$<br>" +
      "$\\dfrac{9}{3}=\\dfrac{12}{GY}$<br>" +
      "$3=\\dfrac{12}{GY} \\Rightarrow GY=4$.<br>" +
      "<b>Answer:</b> $GY=4$."],

    ["Example 10: Algebra with two expressions",
      "$\\overline{DE}\\parallel\\overline{BC}$, $AD=3x-2$, $DB=x+4$, $AE=8$, $EC=4$. Find $x$.",
      "Set up the proportion: $\\dfrac{3x-2}{x+4}=\\dfrac{8}{4}=2$<br>" +
      "Cross-multiply: $3x-2=2(x+4)$<br>" +
      "$3x-2=2x+8$<br>" +
      "$x=10$.<br>" +
      "Check: $AD=3(10)-2=28$, $DB=10+4=14$, ratio $\\dfrac{28}{14}=2$ ✓.<br>" +
      "<b>Answer:</b> $x=10$."],
  ],
  questions: [
    ["Problem 1: Parallel", "$\\overline{DE}\\parallel\\overline{BC}$, $AD=6$, $DB=4$, $AE=9$. Find $EC$.", "$6$"],
    ["Problem 2: Parallel", "$\\overline{DE}\\parallel\\overline{BC}$, $AD=5$, $AB=12$, $AE=10$. Find $AC$.", "$24$"],
    ["Problem 3: Converse", "$AD=8$, $DB=4$, $AE=10$, $EC=5$. Is $\\overline{DE}\\parallel\\overline{BC}$?", "Yes; both ratios $=2$"],
    ["Problem 4: Converse", "$AD=2$, $DB=3$, $AE=4$, $EC=5$. Parallel?", "No; $\\dfrac{2}{3}\\neq\\dfrac{4}{5}$"],
    ["Problem 5: Solve $x$", "$\\overline{DE}\\parallel\\overline{BC}$, $AD=x$, $DB=10$, $AE=6$, $EC=15$. Find $x$.", "$4$"],
    ["Problem 6: Midsegment", "Third side is $22$. Find the midsegment length.", "$11$"],
    ["Problem 7: Find segment", "$\\overline{DE}\\parallel\\overline{BC}$, $AD=4$, $DB=8$, $AC=18$. Find $AE$.", "$6$"],
    ["Problem 8: Proportion", "$\\overline{FG}\\parallel\\overline{BC}$, $AF=3$, $FB=9$, $AG=2$. Find $GC$.", "$6$"],
    ["Problem 9: Midsegment", "Midsegment length is $7$. Find the third side.", "$14$"],
    ["Problem 10: Parallel", "$AD=7$, $AB=21$, $AE=5$. If $\\overline{DE}\\parallel\\overline{BC}$, find $AC$.", "$15$"],
    ["Problem 11: Converse", "$AD=9$, $DB=6$, $AE=12$, $EC=8$. Parallel?", "Yes; both ratios $=\\dfrac{3}{2}$"],
    ["Problem 12: Find $EC$", "$\\overline{DE}\\parallel\\overline{BC}$, $AD=10$, $DB=15$, $AE=8$. Find $EC$.", "$12$"],
    ["Problem 13: Challenge — three parallel lines", "Three parallel lines cut two transversals into segments $4$, $6$ on the first, and $6$, $x$ on the second (matched in order). Find $x$.", "$x=9$"],
    ["Problem 14: Challenge — coordinate midsegment", "Triangle has vertices $A(0,0)$, $B(10,0)$, $C(4,8)$. Find midpoints $M$ (of $\\overline{AB}$) and $N$ (of $\\overline{AC}$), the length $MN$, and verify $\\overline{MN}\\parallel\\overline{BC}$ with $MN=\\tfrac12 BC$.", "$M(5,0)$, $N(2,4)$; $MN=5$, $BC=10$; both have slope $-\\tfrac{4}{3}$, and $MN=\\tfrac12 BC$"],
    ["Problem 15: Challenge — algebra with a ratio", "$\\overline{DE}\\parallel\\overline{BC}$, $AD=2x+1$, $DB=x+5$, $AE=12$, $EC=8$. Find $x$, then $AD$, $DB$, and $AB$.", "$x=13$; $AD=27$, $DB=18$, $AB=45$"],
  ],
};
