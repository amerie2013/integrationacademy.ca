import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "5.1",
  title: "Dilations",
  intro: "A <b>dilation</b> is a transformation that scales a figure from a fixed <b>center</b> by a <b>scale factor $k$</b>, producing a similar image. For a dilation centered at the origin, the rule is $(x,y)\\mapsto(kx,ky)$; for a center at $(a,b)$, translate the center to the origin first: $(x,y)\\mapsto\\big(k(x-a)+a,\\ k(y-b)+b\\big)$. When $|k|>1$ the image is an <b>enlargement</b>; when $0&lt;|k|&lt;1$ it is a <b>reduction</b>; a negative $k$ places the image on the opposite side of the center, along the same line through the center and the original point. Lengths scale by a factor of $|k|$, but <b>areas scale by $k^{2}$</b> (since both dimensions grow). The center itself is the only fixed point — it always maps to itself. This worksheet practises dilating points and figures, finding scale factors, and reasoning about how length and area change.",
  examples: [
    ["Example 1: Dilate from the origin",
      "Find the image of $A(3,-2)$ under a dilation centered at the origin with $k=2$. Classify as an enlargement or reduction.",
      fig(coordPts([{ x: 3, y: -2, label: "A" }, { x: 6, y: -4, label: "A'", color: "#2563eb" }], { xmin: -2, xmax: 8, ymin: -6, ymax: 3 }), "$A'$ is twice as far from the origin as $A$, along the same ray.") +
      "Identify the rule for an origin-centered dilation: $(x,y)\\mapsto(kx,ky)$.<br>" +
      "Apply with $k=2$: $A'=(2\\cdot3,\\ 2\\cdot(-2))=(6,-4)$.<br>" +
      "Since $|k|=2&gt;1$, the image is larger than the original.<br>" +
      "<b>Answer:</b> $A'(6,-4)$ — an enlargement."],

    ["Example 2: Dilate a triangle (reduction)",
      "$\\triangle ABC$ has vertices $A(2,4)$, $B(6,4)$, $C(6,-2)$. Find the image under a dilation about the origin with $k=\\dfrac{1}{2}$, and classify it.",
      "Apply $(x,y)\\mapsto\\left(\\dfrac{1}{2}x,\\dfrac{1}{2}y\\right)$ to each vertex:<br>" +
      "$A'=(1,2)$, $\\quad B'=(3,2)$, $\\quad C'=(3,-1)$.<br>" +
      "Since $0&lt;k=\\dfrac{1}{2}&lt;1$, the image is smaller than the original.<br>" +
      "<b>Answer:</b> $A'(1,2)$, $B'(3,2)$, $C'(3,-1)$ — a reduction."],

    ["Example 3: Find the scale factor",
      "Under a dilation centered at the origin, $P(4,6)$ maps to $P'(10,15)$. Find $k$, and verify using both coordinates.",
      "Since the dilation is centered at the origin, $k=\\dfrac{x'}{x}=\\dfrac{y'}{y}$.<br>" +
      "Using the $x$-coordinates: $k=\\dfrac{10}{4}=\\dfrac{5}{2}$.<br>" +
      "Check with the $y$-coordinates: $k=\\dfrac{15}{6}=\\dfrac{5}{2}$ ✓ — consistent.<br>" +
      "<b>Answer:</b> $k=\\dfrac{5}{2}$."],

    ["Example 4: Dilation about a non-origin center",
      "Dilate $Q(5,3)$ about center $P(1,1)$ with $k=3$.",
      "Translate so the center becomes the origin: subtract $(1,1)$ from $Q$: $(5-1,3-1)=(4,2)$.<br>" +
      "Scale by $k=3$: $(3\\cdot4,\\ 3\\cdot2)=(12,6)$.<br>" +
      "Translate back: add $(1,1)$: $(12+1,\\ 6+1)=(13,7)$.<br>" +
      "<b>Answer:</b> $Q'(13,7)$."],

    ["Example 5: Negative scale factor",
      "Dilate $R(3,5)$ about the origin with $k=-2$. Describe the image's position relative to the center.",
      "Apply $(x,y)\\mapsto(-2x,-2y)$: $R'=(-2\\cdot3,\\ -2\\cdot5)=(-6,-10)$.<br>" +
      "$R(3,5)$ lies northeast of the origin; $R'(-6,-10)$ lies southwest of the origin — the opposite side, along the same line through the center.<br>" +
      "Distance check: $R$ is $\\sqrt{34}$ from the origin; $R'$ is $\\sqrt{136}=2\\sqrt{34}$, exactly $|k|=2$ times as far.<br>" +
      "<b>Answer:</b> $R'(-6,-10)$, on the opposite side of the center, twice as far away."],

    ["Example 6: Length scales by $|k|$",
      "A segment of length $8$ is dilated with $k=-1.5$. Find the image length.",
      "Length always scales by the absolute value of the scale factor, regardless of sign.<br>" +
      "Image length $=|k|\\times 8=1.5\\times8=12$.<br>" +
      "<b>Answer:</b> $12$."],

    ["Example 7: Area scales by $k^{2}$",
      "A square has side length $4$ (area $16$). It is dilated with $k=3$. Find the new side length, new area, and the ratio of the new area to the original. Compare that ratio to $k^{2}$.",
      "New side length $=4\\times3=12$.<br>" +
      "New area $=12^{2}=144$.<br>" +
      "Ratio of areas $=\\dfrac{144}{16}=9$.<br>" +
      "Compare: $k^{2}=3^{2}=9$ — matches exactly.<br>" +
      "<b>Conclusion:</b> area scales by $k^{2}$, not $k$, because both dimensions of the square are multiplied by $k$."],

    ["Example 8: The fixed point",
      "A dilation is centered at $C(-2,5)$. What is the image of $C$ itself, no matter what $k$ is?",
      "By definition, the center of a dilation is the one point that never moves — every other point scales relative to it, but the center's distance to itself is always $0$, and $0\\times k=0$.<br>" +
      "<b>Answer:</b> $C$ maps to itself: $(-2,5)$."],

    ["Example 9: Dilation preserves direction (parallel sides)",
      "Triangle has vertices $A(1,1)$, $B(4,1)$, $C(1,5)$. It is dilated about the origin with $k=2$. Verify that $\\overline{B'C'}$ is parallel to $\\overline{BC}$ by comparing slopes.",
      fig(coordPts([{ x: 1, y: 1, label: "A" }, { x: 4, y: 1, label: "B" }, { x: 1, y: 5, label: "C" }], { xmin: -1, xmax: 9, ymin: -1, ymax: 11 }), "Dilating about the origin with $k=2$ doubles every coordinate.") +
      "Find the image points: $A'(2,2)$, $B'(8,2)$, $C'(2,10)$.<br>" +
      "Slope of $\\overline{BC}$: $\\dfrac{5-1}{1-4}=\\dfrac{4}{-3}=-\\dfrac{4}{3}$.<br>" +
      "Slope of $\\overline{B'C'}$: $\\dfrac{10-2}{2-8}=\\dfrac{8}{-6}=-\\dfrac{4}{3}$.<br>" +
      "The slopes match exactly.<br>" +
      "<b>Conclusion:</b> $\\overline{B'C'}\\parallel\\overline{BC}$ — dilations preserve the direction of every side, which is why the image is always similar to the original."],

    ["Example 10: Blueprint scale factor",
      "An architect's blueprint uses scale factor $k=\\dfrac{1}{50}$ (from the real building to the drawing). A wall is $200$ units long on the actual building. Find its length on the blueprint, and find the scale factor to convert blueprint measurements back to real ones.",
      "Blueprint length $=k\\times(\\text{real length})=\\dfrac{1}{50}\\times200=4$ units.<br>" +
      "The reverse dilation (blueprint $\\to$ real) uses the reciprocal scale factor: $\\dfrac{1}{1/50}=50$.<br>" +
      "Check: $4\\times50=200$ ✓, back to the original length.<br>" +
      "<b>Answer:</b> Blueprint length $=4$ units; reverse scale factor $=50$."],
  ],
  questions: [
    ["Problem 1: Dilate from origin", "Find the image of $A(2,5)$ under a dilation about the origin with $k=4$.", "$A'(8,20)$"],
    ["Problem 2: Dilate from origin", "Find the image of $B(-3,6)$ under a dilation about the origin with $k=\\dfrac{1}{3}$.", "$B'(-1,2)$"],
    ["Problem 3: Scale factor", "Under a dilation about the origin, $P(8,12)$ maps to $P'(2,3)$. Find $k$.", "$k=\\dfrac{1}{4}$"],
    ["Problem 4: Scale factor", "Under a dilation about the origin, $Q(5,-4)$ maps to $Q'(15,-12)$. Find $k$.", "$k=3$"],
    ["Problem 5: Classify", "Is a dilation with $k=0.6$ an enlargement or a reduction?", "Reduction"],
    ["Problem 6: Length", "A segment of length $10$ is dilated with $k=0.4$. Find the image length.", "$4$"],
    ["Problem 7: Non-origin center", "Dilate $S(2,4)$ about center $P(2,0)$ with $k=2$.", "$S'(2,8)$"],
    ["Problem 8: Triangle image", "$\\triangle DEF$ has vertices $D(0,0)$, $E(4,0)$, $F(0,6)$. Dilate about the origin with $k=\\dfrac{1}{2}$.", "$D'(0,0)$, $E'(2,0)$, $F'(0,3)$"],
    ["Problem 9: Length", "A segment of length $14$ is dilated with $k=\\dfrac{3}{2}$. Find the image length.", "$21$"],
    ["Problem 10: Negative scale factor", "Find the image of $C(7,-1)$ under a dilation about the origin with $k=-2$.", "$C'(-14,2)$"],
    ["Problem 11: Non-origin center", "Dilate $T(4,6)$ about center $O(0,2)$ with $k=\\dfrac{1}{2}$.", "$T'(2,4)$"],
    ["Problem 12: Scale factor", "Under a dilation about the origin, $M(-2,8)$ maps to $M'(-5,20)$. Find $k$.", "$k=\\dfrac{5}{2}$"],
    ["Problem 13: Challenge — area scaling", "A square has side length $6$ (area $36$). It is dilated with $k=\\dfrac{2}{3}$. Find the new side length, the new area, and verify the ratio of areas equals $k^{2}$.", "New side $=4$; new area $=16$; ratio $=\\dfrac{4}{9}=k^{2}$"],
    ["Problem 14: Challenge — negative $k$, non-origin center", "Dilate $W(6,2)$ about center $C(2,2)$ with $k=-3$. Find the image, then state where it lies relative to $W$ and $C$.", "$W'(-10,2)$; on the opposite side of $C$ from $W$, three times as far away"],
    ["Problem 15: Challenge — scale model", "A model car uses scale factor $k=\\dfrac{1}{12}$ of the real car. The real car is $180$ in long with a side-profile area of $2880\\text{ in}^2$. Find the model's length and side-profile area.", "Model length $=15$ in; model area $=20\\text{ in}^2$"],
  ],
};
