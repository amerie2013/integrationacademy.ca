import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "5.5",
  title: "Similarity Transformations",
  intro: "Two figures are similar exactly when a sequence of <b>rigid motions</b> (translations, rotations, reflections — which preserve size and shape) and a single <b>dilation</b> (which scales size by $k$ but preserves shape) maps one onto the other. Rigid motions preserve every length and angle; a dilation preserves every angle but multiplies every length by $|k|$. Because of this, a similarity transformation always preserves angle measure, and scales all lengths by the same overall factor — even a compound sequence of several dilations has a single <b>net scale factor</b> equal to the product of the individual factors. When $k=1$, a similarity transformation is simply a <b>congruence transformation</b>. Reflections are the one type of rigid motion that reverses orientation (clockwise $\\leftrightarrow$ counterclockwise), while translations and rotations preserve it. This worksheet practises identifying, composing, and reversing similarity transformations on the coordinate plane.",
  examples: [
    ["Example 1: Dilation followed by translation",
      "$\\triangle ABC$ has $A(1,1)$, $B(3,1)$, $C(1,4)$. It is dilated by $k=2$ about the origin, then translated by $(5,-1)$. Find the final image, and explain why it is similar to $\\triangle ABC$.",
      fig(coordPts([{ x: 1, y: 1, label: "A" }, { x: 3, y: 1, label: "B" }, { x: 1, y: 4, label: "C" }], { xmin: -1, xmax: 8, ymin: -2, ymax: 8 }), "Pre-image before dilation and translation.") +
      "Dilate each vertex by $k=2$ about the origin: $A'(2,2)$, $B'(6,2)$, $C'(2,8)$.<br>" +
      "Translate by $(5,-1)$: $A''(7,1)$, $B''(11,1)$, $C''(7,7)$.<br>" +
      "The dilation scales every side by $k=2$ while preserving angles; the translation is a rigid motion that changes neither size nor shape.<br>" +
      "<b>Conclusion:</b> the final triangle has all angles congruent to $\\triangle ABC$ and all sides exactly twice as long — it is similar to $\\triangle ABC$ with scale factor $2$."],

    ["Example 2: Describe the transformation sequence",
      "$\\triangle DEF$ has $D(0,0)$, $E(2,0)$, $F(0,3)$. It maps to $D'(4,6)$, $E'(8,6)$, $F'(4,12)$. Describe a similarity transformation that accomplishes this.",
      "Find the scale factor using a side length: $DE=2$; $D'E'=\\sqrt{(8-4)^{2}+(6-6)^{2}}=4$. So $k=\\dfrac{4}{2}=2$.<br>" +
      "Dilate each vertex by $k=2$ about the origin first: $D\\to(0,0)$, $E\\to(4,0)$, $F\\to(0,6)$.<br>" +
      "Compare to the actual images: each is shifted by the same amount, $(4,6)$: $(0,0)+(4,6)=(4,6)=D'$ ✓, $(4,0)+(4,6)=(8,6)=E'$ ✓, $(0,6)+(4,6)=(4,12)=F'$ ✓.<br>" +
      "<b>Answer:</b> dilate about the origin with $k=2$, then translate by $(4,6)$."],

    ["Example 3: Scale factor from perimeter",
      "A figure with perimeter $24$ maps under a similarity transformation to a figure with perimeter $60$. Find $k$. If a side of the original figure is $7$, find the corresponding image side.",
      "Perimeters of similar figures scale by the same factor as their sides: $k=\\dfrac{60}{24}=\\dfrac{5}{2}$.<br>" +
      "Apply $k$ to the given side: image side $=7\\times\\dfrac{5}{2}=17.5$.<br>" +
      "<b>Answer:</b> $k=\\dfrac{5}{2}$; corresponding image side $=17.5$."],

    ["Example 4: Reflection reverses orientation",
      "$\\triangle PQR$ has $P(0,0)$, $Q(4,0)$, $R(0,3)$, listed counterclockwise. It is reflected over the $y$-axis. Find the image vertices and determine the new orientation.",
      fig(coordPts([{ x: 0, y: 0, label: "P" }, { x: 4, y: 0, label: "Q" }, { x: 0, y: 3, label: "R" }], { xmin: -5, xmax: 5, ymin: -1, ymax: 5 }), "Reflecting over the $y$-axis negates every $x$-coordinate.") +
      "Apply the reflection rule $(x,y)\\mapsto(-x,y)$: $P'(0,0)$, $Q'(-4,0)$, $R'(0,3)$.<br>" +
      "In the original, tracing $P\\to Q\\to R$ moves right then up-left — counterclockwise.<br>" +
      "In the image, tracing $P'\\to Q'\\to R'$ moves left then up-right — the direction of travel has reversed.<br>" +
      "<b>Conclusion:</b> the image is traversed clockwise — reflections always reverse orientation, unlike translations or rotations."],

    ["Example 5: The congruence special case",
      "A triangle is rotated $90^{\\circ}$ about the origin, with no dilation applied. Explain why this is a similarity transformation with $k=1$, and name the special case.",
      "A rotation is a rigid motion — it preserves every length and angle exactly, with no scaling at all.<br>" +
      "Since no length changes, the effective scale factor is $k=1$.<br>" +
      "<b>Conclusion:</b> a similarity transformation with $k=1$ is simply a <b>congruence transformation</b> — congruence is the special case of similarity where nothing is resized."],

    ["Example 6: Find $k$ from a pure dilation",
      "Point $(3,5)$ maps to $(9,15)$ under a dilation about the origin (no other transformations). Find $k$, confirming with both coordinates.",
      "Using the $x$-coordinates: $k=\\dfrac{9}{3}=3$.<br>" +
      "Check with the $y$-coordinates: $k=\\dfrac{15}{5}=3$ ✓ — consistent.<br>" +
      "<b>Answer:</b> $k=3$."],

    ["Example 7: Composing two dilations",
      "A figure is dilated about the origin by $k_1=2$, and the image is then dilated about the origin again by $k_2=3$. Find the net scale factor, and verify using the point $(2,1)$.",
      "The net scale factor of two dilations about the same center is the <i>product</i> of the individual factors: $k_{\\text{net}}=k_1\\times k_2=2\\times3=6$.<br>" +
      "Apply step by step to $(2,1)$: first dilation gives $(4,2)$; second dilation gives $(12,6)$.<br>" +
      "Apply the net factor directly: $(2,1)\\times6=(12,6)$ ✓ — matches.<br>" +
      "<b>Answer:</b> net scale factor $=6$."],

    ["Example 8: Scale factor from a rotation + dilation",
      "A triangle has a side of length $6$. After a rotation followed by a dilation, the corresponding image side measures $21$. Find the scale factor $k$ used in the dilation.",
      "A rotation alone does not change any length, so all of the length change comes from the dilation.<br>" +
      "$k=\\dfrac{\\text{image length}}{\\text{original length}}=\\dfrac{21}{6}=3.5$.<br>" +
      "<b>Answer:</b> $k=3.5$."],

    ["Example 9: Logo scaling (word problem)",
      "A company logo triangle has a base of $8$ cm. A larger version for a billboard is created using a similarity transformation with $k=4.5$. Find the billboard version's base length.",
      "Apply the scale factor directly to the given length:<br>" +
      "billboard base $=8\\times4.5=36$ cm.<br>" +
      "<b>Answer:</b> $36$ cm."],

    ["Example 10: Angle measure is preserved",
      "$\\triangle XYZ$ has $\\angle X=65^{\\circ}$. It is reflected over the $x$-axis, then dilated by $k=\\dfrac{2}{5}$ about the origin. Find the measure of the corresponding angle in the final image, and explain why.",
      "A reflection is a rigid motion, so it preserves angle measure exactly.<br>" +
      "A dilation scales every length by $k$ but leaves every angle measure unchanged (it only stretches distances, not the geometry of the angles).<br>" +
      "Since neither transformation in the sequence changes angle measure, the final angle is unchanged.<br>" +
      "<b>Answer:</b> $65^{\\circ}$ — similarity transformations always preserve angle measure, even when they scale lengths."],
  ],
  questions: [
    ["Problem 1: Scale factor", "Corresponding sides $8$ and $2$. Scale factor from larger to smaller?", "$\\dfrac{1}{4}$"],
    ["Problem 2: Sequence", "Name the two types of transformations that make up a similarity mapping.", "Rigid motions and a dilation"],
    ["Problem 3: Side length", "Under a similarity with $k=3$, a side of length $5$ becomes what length?", "$15$"],
    ["Problem 4: Angle", "An angle measuring $110^{\\circ}$ maps under a similarity transformation to what measure?", "$110^{\\circ}$"],
    ["Problem 5: Congruence", "A similarity transformation with $k=1$ is also called what?", "A congruence transformation"],
    ["Problem 6: Perimeter", "Perimeter $18$ maps to perimeter $45$. Find $k$.", "$\\dfrac{5}{2}$"],
    ["Problem 7: Dilation rule", "Points $(2,4)$ and $(4,8)$ suggest what origin-centered scale factor?", "$k=2$"],
    ["Problem 8: Orientation", "Which type of rigid motion reverses orientation?", "Reflection"],
    ["Problem 9: Side", "A side of $21$ after a dilation with $k=\\dfrac{1}{7}$ becomes what length?", "$3$"],
    ["Problem 10: Similar?", "A figure is dilated by $k=0.5$, then rotated. Is the image similar to the original?", "Yes"],
    ["Problem 11: Scale factor", "Corresponding sides $9$ and $12$. Find $k$ from the first figure to the second.", "$\\dfrac{4}{3}$"],
    ["Problem 12: Fixed angles", "Do similarity transformations always preserve angle measures?", "Yes"],
    ["Problem 13: Challenge — composing dilations", "A figure is dilated about the origin by $k_1=1.5$, then dilated again about the origin by $k_2=4$. Find the net scale factor and the image of $(4,-2)$.", "Net $k=6$; image of $(4,-2)$ is $(24,-12)$"],
    ["Problem 14: Challenge — reflect then dilate", "Point $(3,7)$ is reflected over the $x$-axis, then dilated by $k=3$ about the origin. Find the final image.", "$(9,-21)$"],
    ["Problem 15: Challenge — describe the sequence", "$\\triangle DEF$ with $D(0,0)$, $E(3,0)$, $F(0,5)$ maps to $D'(2,4)$, $E'(8,4)$, $F'(2,14)$. Find the scale factor and describe a dilation-then-translation sequence that works.", "$k=2$; dilate about the origin with $k=2$, then translate by $(2,4)$"],
  ],
};
