import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

ch["3.1"] = L("3.1", "Translations on the Coordinate Plane (MA.912.GR.2.1)", [
  lessonHtml({
    title: "Translations on the Coordinate Plane",
    emoji: "➡️",
    overview: `A <strong>transformation</strong> takes every point of a figure (the <strong>preimage</strong>) and maps it to a new point (the <strong>image</strong>, marked with primes: \\(A\\to A'\\)). A <strong>translation</strong> is the simplest rigid motion — it slides every point the same distance in the same direction, described by a rule \\((x,y)\\to(x+a,y+b)\\) or a vector \\(\\langle a,b\\rangle\\). Because a translation is a <strong>rigid motion</strong> (also called an <strong>isometry</strong>), it preserves distance and angle measure, so the image is always congruent to the preimage.`,
    toolkit: [
      `<strong>Preimage vs. image:</strong> the original figure's points are unprimed (\\(A\\), \\(B\\), \\(C\\)); the transformed points are primed (\\(A'\\), \\(B'\\), \\(C'\\)).`,
      `<strong>Translation rule:</strong> \\((x,y)\\to(x+a,y+b)\\) shifts every point \\(a\\) units horizontally and \\(b\\) units vertically. Equivalently, translate by vector \\(\\langle a,b\\rangle\\).`,
      `A translation is a <strong>rigid motion (isometry)</strong>: it preserves distance (\\(A'B'=AB\\)), angle measure, and shape — so the image is always congruent to the preimage.`,
      `Translations preserve <strong>orientation</strong> (the figure isn't flipped or reflected) and preserve <strong>parallelism</strong>: if \\(\\overline{AB}\\parallel\\overline{CD}\\) before, then \\(\\overline{A'B'}\\parallel\\overline{C'D'}\\) after.`,
      `To find a translation rule from a preimage/image pair, subtract corresponding coordinates: \\(a=x'-x\\), \\(b=y'-y\\).`,
    ],
    examples: [
      {
        h: "Applying a translation rule",
        p: "Triangle \\(ABC\\) has vertices \\(A(1,2)\\), \\(B(4,2)\\), \\(C(4,5)\\). Find the image under the translation \\((x,y)\\to(x-3,y+4)\\).",
        steps: [
          `<strong>Step 1 — Apply the rule to \\(A\\):</strong> \\(A(1,2)\\to A'(1-3,2+4)=A'(-2,6)\\).`,
          `<strong>Step 2 — Apply the rule to \\(B\\):</strong> \\(B(4,2)\\to B'(4-3,2+4)=B'(1,6)\\).`,
          `<strong>Step 3 — Apply the rule to \\(C\\):</strong> \\(C(4,5)\\to C'(4-3,5+4)=C'(1,9)\\).`,
        ],
        check: "Every point shifted left 3 and up 4 — the same shift for all three vertices, as a translation requires.",
      },
      {
        h: "Writing a translation rule from a vector",
        p: "Translate point \\(P(-2,3)\\) by vector \\(\\langle 5,-1\\rangle\\). Find \\(P'\\).",
        steps: [
          `<strong>Step 1 — Interpret the vector as a rule:</strong> \\(\\langle 5,-1\\rangle\\) means \\((x,y)\\to(x+5,y-1)\\).`,
          `<strong>Step 2 — Apply it:</strong> \\(P'(-2+5,3-1)=P'(3,2)\\).`,
        ],
      },
      {
        h: "Finding the translation rule from two points",
        p: "\\(A(2,-1)\\) is translated to \\(A'(-3,4)\\). Find the translation rule and use it to translate \\(B(6,0)\\).",
        steps: [
          `<strong>Step 1 — Find the horizontal shift:</strong> \\(a=x'-x=-3-2=-5\\).`,
          `<strong>Step 2 — Find the vertical shift:</strong> \\(b=y'-y=4-(-1)=5\\).`,
          `<strong>Step 3 — Write the rule:</strong> \\((x,y)\\to(x-5,y+5)\\).`,
          `<strong>Step 4 — Apply it to \\(B\\):</strong> \\(B'(6-5,0+5)=B'(1,5)\\).`,
        ],
        check: "Verify with A: (2 − 5, −1 + 5) = (−3, 4) = A′. ✓",
      },
      {
        h: "Confirming congruence after a translation",
        p: "\\(\\overline{AB}\\) has \\(A(0,0)\\) and \\(B(3,4)\\). Translate by \\((x,y)\\to(x+2,y-1)\\) to get \\(\\overline{A'B'}\\). Verify that \\(A'B'=AB\\).",
        steps: [
          `<strong>Step 1 — Find the image points:</strong> \\(A'(2,-1)\\), \\(B'(5,3)\\).`,
          `<strong>Step 2 — Compute \\(AB\\):</strong> \\(AB=\\sqrt{(3-0)^2+(4-0)^2}=\\sqrt{9+16}=\\sqrt{25}=5\\).`,
          `<strong>Step 3 — Compute \\(A'B'\\):</strong> \\(A'B'=\\sqrt{(5-2)^2+(3-(-1))^2}=\\sqrt{9+16}=\\sqrt{25}=5\\).`,
        ],
        check: "A′B′ = AB = 5 — confirms the translation is a rigid motion, as guaranteed by theory.",
      },
      {
        h: "Translating a polygon and describing the image",
        p: "Square \\(WXYZ\\) has \\(W(-1,1)\\), \\(X(1,1)\\), \\(Y(1,-1)\\), \\(Z(-1,-1)\\). Translate by \\((x,y)\\to(x+4,y+2)\\) and describe the image figure.",
        steps: [
          `<strong>Step 1 — Translate each vertex:</strong> \\(W'(3,3)\\), \\(X'(5,3)\\), \\(Y'(5,1)\\), \\(Z'(3,1)\\).`,
          `<strong>Step 2 — Compare side lengths:</strong> each side of the image still has length 2, same as the original square, since translations preserve distance.`,
          `<strong>Conclusion:</strong> \\(W'X'Y'Z'\\) is a square congruent to \\(WXYZ\\), simply shifted 4 units right and 2 units up — same size, same shape, same orientation.`,
        ],
      },
    ],
    practice: [
      { q: "Translate \\(A(3,-2)\\) using the rule \\((x,y)\\to(x+1,y+6)\\). Find \\(A'\\).", a: "\\(A'(3+1,-2+6)=A'(4,4)\\)." },
      { q: "Translate \\(\\triangle DEF\\) with \\(D(0,0)\\), \\(E(2,3)\\), \\(F(-1,4)\\) by vector \\(\\langle -3,2\\rangle\\). Find the coordinates of the image.", a: "\\(D'(-3,2)\\), \\(E'(-1,5)\\), \\(F'(-4,6)\\)." },
      { q: "Point \\(M(5,-3)\\) translates to \\(M'(2,1)\\). Write the translation rule.", a: "\\(a=2-5=-3\\), \\(b=1-(-3)=4\\), so the rule is \\((x,y)\\to(x-3,y+4)\\)." },
      { q: "\\(\\overline{PQ}\\) has \\(P(1,1)\\), \\(Q(4,5)\\). After a translation, \\(P'(6,-2)\\). Find \\(Q'\\).", a: "The rule is \\((x,y)\\to(x+5,y-3)\\) (since \\(6-1=5\\), \\(-2-1=-3\\)). Then \\(Q'(4+5,5-3)=Q'(9,2)\\)." },
      { q: "True or false: a translation can change the orientation (clockwise/counterclockwise labeling) of a triangle's vertices. Explain.", a: "False. A translation is a rigid motion that only slides a figure — it never flips or rotates it, so the orientation of the vertices stays exactly the same." },
    ],
    qa: [
      { q: "What does it mean for a transformation to be \"rigid\"?", a: "A rigid motion (isometry) preserves distances and angle measures — the image is an exact congruent copy of the preimage, just in a different location and/or orientation. Translations, reflections, and rotations are all rigid motions; dilations (Chapter 5) are not." },
      { q: "Is a translation the same as a vector?", a: "They're closely related — a translation rule can always be described by a vector \\(\\langle a,b\\rangle\\) that tells you exactly how far and in what direction every point moves. \"Translate by this vector\" and \"apply this (x,y) rule\" mean the same thing." },
      { q: "Do I translate one point at a time, or can I translate a whole equation/shape at once?", a: "For coordinate problems, translate each vertex individually using the rule — the shape's edges connect the new vertices automatically and the result is guaranteed congruent to the original." },
      { q: "How can I check my translation answer is right?", a: "Pick any two of your image points and compute the distance between them, then compare to the same two points' distance in the preimage. If a translation was done correctly, those distances always match exactly." },
    ],
  }),
]);

ch["3.2"] = L("3.2", "Reflections on the Coordinate Plane (MA.912.GR.2.1)", [
  lessonHtml({
    title: "Reflections on the Coordinate Plane",
    emoji: "🪞",
    overview: `A <strong>reflection</strong> flips a figure across a <strong>line of reflection</strong>, producing a mirror image. Every point and its image are the same distance from the line, and the segment connecting a point to its image is always perpendicular to the line of reflection. Reflections are rigid motions like translations, but with one key difference: they <strong>reverse orientation</strong> — a figure labeled clockwise becomes labeled counterclockwise in its image.`,
    toolkit: [
      `<strong>Reflection across the \\(x\\)-axis:</strong> \\((x,y)\\to(x,-y)\\).`,
      `<strong>Reflection across the \\(y\\)-axis:</strong> \\((x,y)\\to(-x,y)\\).`,
      `<strong>Reflection across \\(y=x\\):</strong> \\((x,y)\\to(y,x)\\). <strong>Reflection across \\(y=-x\\):</strong> \\((x,y)\\to(-y,-x)\\).`,
      `<strong>Key property:</strong> the line of reflection is the perpendicular bisector of every segment connecting a point to its image — that is, \\(\\overline{PP'}\\perp\\) line of reflection, and the line crosses \\(\\overline{PP'}\\) at its midpoint.`,
      `Reflections preserve distance and angle measure (they're rigid motions) but <strong>reverse orientation</strong>, unlike translations and rotations.`,
    ],
    examples: [
      {
        h: "Reflecting across the x-axis",
        p: "Reflect \\(\\triangle ABC\\) with \\(A(2,3)\\), \\(B(5,1)\\), \\(C(1,-2)\\) across the \\(x\\)-axis.",
        steps: [
          `<strong>Step 1 — Apply the rule \\((x,y)\\to(x,-y)\\) to each vertex:</strong> \\(A'(2,-3)\\), \\(B'(5,-1)\\), \\(C'(1,2)\\).`,
        ],
        check: "Every x-coordinate stayed the same; every y-coordinate flipped sign — exactly what reflecting over the x-axis (y = 0) should do.",
      },
      {
        h: "Reflecting across y = x",
        p: "Reflect point \\(P(4,-1)\\) across the line \\(y=x\\).",
        steps: [
          `<strong>Step 1 — Apply the rule \\((x,y)\\to(y,x)\\):</strong> \\(P'(-1,4)\\).`,
        ],
        check: "Swapping coordinates is the shortcut for reflecting over y = x, since that line is where x and y are always equal.",
      },
      {
        h: "Reflecting across a vertical line other than the y-axis",
        p: "Reflect point \\(Q(2,5)\\) across the vertical line \\(x=6\\).",
        steps: [
          `<strong>Step 1 — Find the horizontal distance to the line:</strong> \\(Q\\) is at \\(x=2\\); the line is at \\(x=6\\), a distance of \\(6-2=4\\).`,
          `<strong>Step 2 — Reflect the same distance on the other side:</strong> the image must be \\(4\\) units on the other side of \\(x=6\\), at \\(x=6+4=10\\).`,
          `<strong>Conclusion:</strong> \\(Q'(10,5)\\) — the \\(y\\)-coordinate never changes when reflecting across a vertical line.`,
        ],
        check: "The line x = 6 lies exactly halfway between x = 2 and x = 10, confirming it's the perpendicular bisector of segment QQ′.",
      },
      {
        h: "Finding the line of reflection",
        p: "\\(R(3,2)\\) reflects to \\(R'(3,-6)\\). Find the line of reflection.",
        steps: [
          `<strong>Step 1 — Notice the x-coordinate didn't change:</strong> this means the reflection line must be horizontal (a reflection across a horizontal line only changes \\(y\\)).`,
          `<strong>Step 2 — Find the midpoint of \\(\\overline{RR'}\\):</strong> the line of reflection passes through the midpoint: \\(\\left(3,\\dfrac{2+(-6)}{2}\\right)=(3,-2)\\).`,
          `<strong>Conclusion:</strong> the line of reflection is \\(y=-2\\).`,
        ],
      },
      {
        h: "A reflection reverses orientation",
        p: "\\(\\triangle ABC\\) has vertices listed counterclockwise: \\(A(0,0)\\), \\(B(4,0)\\), \\(C(0,3)\\). Reflect across the \\(y\\)-axis and explain what happens to the orientation.",
        steps: [
          `<strong>Step 1 — Apply the rule \\((x,y)\\to(-x,y)\\):</strong> \\(A'(0,0)\\), \\(B'(-4,0)\\), \\(C'(0,3)\\).`,
          `<strong>Step 2 — Trace the new vertex order:</strong> going \\(A'\\to B'\\to C'\\) now traces the triangle clockwise instead of counterclockwise.`,
          `<strong>Conclusion:</strong> reflecting reversed the orientation — this always happens with a single reflection, and is the key visual difference from a translation or rotation.`,
        ],
      },
    ],
    practice: [
      { q: "Reflect \\(D(-3,4)\\) across the \\(y\\)-axis.", a: "\\((x,y)\\to(-x,y)\\), so \\(D'(3,4)\\)." },
      { q: "Reflect \\(E(6,-2)\\) across the line \\(y=-x\\).", a: "\\((x,y)\\to(-y,-x)\\), so \\(E'(2,-6)\\)." },
      { q: "Reflect \\(F(1,5)\\) across the horizontal line \\(y=2\\).", a: "Distance from \\(y=5\\) to \\(y=2\\) is 3, so the image is 3 units on the other side: \\(y=2-3=-1\\). \\(F'(1,-1)\\)." },
      { q: "\\(G(-2,7)\\) reflects to \\(G'(8,7)\\). Find the line of reflection.", a: "The y-coordinate is unchanged, so the line is vertical. Midpoint of x-coordinates: \\(\\dfrac{-2+8}{2}=3\\). Line of reflection: \\(x=3\\)." },
      { q: "A triangle is reflected twice across the same line. What is the net effect on the triangle's orientation compared to the very original?", a: "Two reflections across the same line return every point to its starting position — the net transformation is the identity (no change at all), so the orientation is back to the original (reflecting twice flips orientation back both times, canceling out)." },
    ],
    qa: [
      { q: "How do I know which reflection rule to use?", a: "Identify the exact line of reflection first (x-axis, y-axis, y = x, y = -x, or another horizontal/vertical line), then apply the matching rule. For any other line, use the perpendicular-distance idea from Examples 3 and 4." },
      { q: "Why does a reflection reverse orientation but a translation doesn't?", a: "A translation slides a figure without flipping it, so if you traced the vertices clockwise before, you still trace them clockwise after. A reflection is like flipping a transparency over — whichever way you were tracing the shape, flipping it reverses that tracing direction." },
      { q: "Is the line of reflection always exactly in the middle between a point and its image?", a: "Yes — always. The line of reflection is the perpendicular bisector of the segment connecting any point to its image. This is actually the defining property of a reflection." },
      { q: "Can a point be its own image under a reflection?", a: "Yes, if the point lies exactly on the line of reflection. Every point on the line of reflection maps to itself." },
    ],
  }),
]);

ch["3.3"] = L("3.3", "Rotations on the Coordinate Plane (MA.912.GR.2.1)", [
  lessonHtml({
    title: "Rotations on the Coordinate Plane",
    emoji: "🔄",
    overview: `A <strong>rotation</strong> turns a figure about a fixed <strong>center of rotation</strong> by a given angle. Like translations and reflections, rotations are rigid motions — they preserve distance and angle measure — but unlike reflections, they preserve <strong>orientation</strong>. In this course, rotations about the origin follow simple coordinate rules, and unless stated otherwise, positive angles rotate <strong>counterclockwise</strong>.`,
    toolkit: [
      `<strong>\\(90^\\circ\\) counterclockwise about the origin:</strong> \\((x,y)\\to(-y,x)\\).`,
      `<strong>\\(180^\\circ\\) about the origin:</strong> \\((x,y)\\to(-x,-y)\\) (same result whether clockwise or counterclockwise).`,
      `<strong>\\(270^\\circ\\) counterclockwise about the origin</strong> (equivalent to \\(90^\\circ\\) clockwise): \\((x,y)\\to(y,-x)\\).`,
      `A rotation preserves the distance from the center: if \\(P\\) is at distance \\(r\\) from the center, its image \\(P'\\) is also at distance \\(r\\) from the center.`,
      `To rotate about a point other than the origin, translate that point to the origin, apply the rotation rule, then translate back — the underlying rule stays the same, just applied relative to the new center.`,
    ],
    examples: [
      {
        h: "Rotating 90° counterclockwise about the origin",
        p: "Rotate \\(\\triangle ABC\\) with \\(A(2,1)\\), \\(B(4,1)\\), \\(C(4,3)\\) by \\(90^\\circ\\) counterclockwise about the origin.",
        steps: [
          `<strong>Step 1 — Apply \\((x,y)\\to(-y,x)\\) to each vertex:</strong> \\(A(2,1)\\to A'(-1,2)\\); \\(B(4,1)\\to B'(-1,4)\\); \\(C(4,3)\\to C'(-3,4)\\).`,
        ],
        check: "Distance from the origin to A is √5; distance from the origin to A′ is √((−1)² + 2²) = √5 — unchanged, as a rotation requires.",
      },
      {
        h: "Rotating 180° about the origin",
        p: "Rotate point \\(P(-3,5)\\) by \\(180^\\circ\\) about the origin.",
        steps: [
          `<strong>Step 1 — Apply \\((x,y)\\to(-x,-y)\\):</strong> \\(P'(3,-5)\\).`,
        ],
        check: "A 180° rotation is the same as reflecting through the origin — both coordinates simply change sign.",
      },
      {
        h: "Rotating 270° counterclockwise",
        p: "Rotate \\(Q(5,-2)\\) by \\(270^\\circ\\) counterclockwise about the origin.",
        steps: [
          `<strong>Step 1 — Apply \\((x,y)\\to(y,-x)\\):</strong> \\(Q'(-2,-5)\\).`,
        ],
        check: "270° counterclockwise lands in the same place as 90° clockwise — a useful cross-check if you ever mix up direction.",
      },
      {
        h: "Identifying the rotation from a point pair",
        p: "Point \\(M(3,4)\\) rotates about the origin to \\(M'(-4,3)\\). What rotation was applied?",
        steps: [
          `<strong>Step 1 — Compare to the three rules:</strong> \\(90^\\circ\\) CCW gives \\((-y,x)=(-4,3)\\), which matches \\(M'\\) exactly.`,
          `<strong>Conclusion:</strong> the rotation was \\(90^\\circ\\) counterclockwise about the origin.`,
        ],
      },
      {
        h: "Rotation preserves side lengths and angle measures",
        p: "Square \\(WXYZ\\) has \\(W(1,1)\\), \\(X(3,1)\\), \\(Y(3,3)\\), \\(Z(1,3)\\). Rotate \\(180^\\circ\\) about the origin and verify the image is still a square with the same side length.",
        steps: [
          `<strong>Step 1 — Apply \\((x,y)\\to(-x,-y)\\):</strong> \\(W'(-1,-1)\\), \\(X'(-3,-1)\\), \\(Y'(-3,-3)\\), \\(Z'(-1,-3)\\).`,
          `<strong>Step 2 — Check a side length:</strong> \\(W'X'=\\sqrt{(-3-(-1))^2+(-1-(-1))^2}=\\sqrt{4}=2\\), matching the original side \\(WX=2\\).`,
          `<strong>Conclusion:</strong> \\(W'X'Y'Z'\\) is congruent to \\(WXYZ\\) — still a square with side length 2, confirming rotations are rigid motions.`,
        ],
      },
    ],
    practice: [
      { q: "Rotate \\(A(6,2)\\) by \\(90^\\circ\\) counterclockwise about the origin.", a: "\\((x,y)\\to(-y,x)\\), so \\(A'(-2,6)\\)." },
      { q: "Rotate \\(B(-4,-1)\\) by \\(180^\\circ\\) about the origin.", a: "\\((x,y)\\to(-x,-y)\\), so \\(B'(4,1)\\)." },
      { q: "Rotate \\(C(0,5)\\) by \\(270^\\circ\\) counterclockwise about the origin.", a: "\\((x,y)\\to(y,-x)\\), so \\(C'(5,0)\\)." },
      { q: "Point \\(D(-2,6)\\) rotates about the origin to \\(D'(2,-6)\\). What rotation was applied?", a: "This matches \\((x,y)\\to(-x,-y)\\), so it was a \\(180^\\circ\\) rotation." },
      { q: "A triangle is rotated \\(90^\\circ\\) clockwise about the origin. What rule should you use, and why?", a: "Use \\((x,y)\\to(y,-x)\\) — this is the same as a \\(270^\\circ\\) counterclockwise rotation, since rotating 90° clockwise covers the remaining \\(360^\\circ-90^\\circ=270^\\circ\\) if you went the counterclockwise way instead." },
    ],
    qa: [
      { q: "How do I remember the three rotation rules?", a: "Notice the pattern: 90° CCW swaps the coordinates and negates the new y (originally x): \\((x,y)\\to(-y,x)\\). 180° just negates both. 270° CCW swaps and negates the new x: \\((x,y)\\to(y,-x)\\). If you forget, you can also derive any of them by composing two or three 90° rotations." },
      { q: "Which direction is \"positive\" for a rotation — clockwise or counterclockwise?", a: "By convention (matching standard position for angles), counterclockwise is positive unless a problem specifically says \"clockwise.\" Always check the problem's wording carefully." },
      { q: "Do these coordinate rules work for a rotation about any point, or only the origin?", a: "As written, they only work for rotations centered at the origin. To rotate about a different center \\((h,k)\\), first translate the whole figure by \\((-h,-k)\\) to move the center to the origin, apply the rule, then translate back by \\((h,k)\\)." },
      { q: "Does a rotation ever reverse orientation, like a reflection does?", a: "No — a rotation always preserves orientation. If a triangle's vertices read counterclockwise before the rotation, they still read counterclockwise after. This is a key way to tell a rotation apart from a reflection when only the image is shown." },
    ],
  }),
]);

ch["3.4"] = L("3.4", "Compositions of Transformations (MA.912.GR.2.3)", [
  lessonHtml({
    title: "Compositions of Transformations",
    emoji: "🔗",
    overview: `A <strong>composition of transformations</strong> applies two or more rigid motions in sequence — the image of the first transformation becomes the preimage of the second. Order matters, and the notation \\((f\\circ g)(x)\\) means "apply \\(g\\) first, then \\(f\\)." Because each individual rigid motion preserves distance and angle measure, any composition of rigid motions is itself a rigid motion. Some pairs of transformations even combine into a single, simpler transformation — a pattern worth recognizing.`,
    toolkit: [
      `<strong>Composition notation:</strong> \\((f\\circ g)(x)\\) means apply \\(g\\) first, then apply \\(f\\) to the result. Always work from the inside out.`,
      `Since translations, reflections, and rotations are each rigid motions, any <strong>composition</strong> of them is also a rigid motion — the final image is always congruent to the original preimage.`,
      `<strong>Two reflections over parallel lines</strong> compose into a single <strong>translation</strong>, perpendicular to both lines, with distance equal to <strong>twice</strong> the distance between the lines.`,
      `<strong>Two reflections over intersecting lines</strong> compose into a single <strong>rotation</strong> about the point of intersection, with angle equal to <strong>twice</strong> the angle between the lines.`,
      `A <strong>glide reflection</strong> is a specific composition: a translation followed by a reflection across a line parallel to the translation's direction.`,
    ],
    examples: [
      {
        h: "Performing a composition in order",
        p: "\\(A(2,1)\\) is first reflected across the \\(y\\)-axis, then translated by \\((x,y)\\to(x+3,y-2)\\). Find the final image.",
        steps: [
          `<strong>Step 1 — Apply the reflection first (it's listed first):</strong> \\((x,y)\\to(-x,y)\\) gives \\(A(2,1)\\to(-2,1)\\).`,
          `<strong>Step 2 — Apply the translation to that result:</strong> \\((-2,1)\\to(-2+3,1-2)=(1,-1)\\).`,
          `<strong>Conclusion:</strong> the final image is \\((1,-1)\\).`,
        ],
        check: "Always perform the transformations in the stated order — reversing the order can give a different final answer.",
      },
      {
        h: "Order matters",
        p: "Repeat Example 1 with the order swapped: translate \\(A(2,1)\\) by \\((x,y)\\to(x+3,y-2)\\) first, then reflect across the \\(y\\)-axis. Compare the result to Example 1.",
        steps: [
          `<strong>Step 1 — Translate first:</strong> \\(A(2,1)\\to(2+3,1-2)=(5,-1)\\).`,
          `<strong>Step 2 — Reflect across the \\(y\\)-axis:</strong> \\((5,-1)\\to(-5,-1)\\).`,
          `<strong>Conclusion:</strong> \\((-5,-1)\\), which is different from Example 1's result of \\((1,-1)\\).`,
        ],
        check: "This confirms that composition order genuinely matters — reflection-then-translation and translation-then-reflection are not the same transformation in general.",
      },
      {
        h: "Composing two reflections over parallel lines",
        p: "Reflect \\(P(1,2)\\) across the line \\(x=1\\), then reflect that image across the line \\(x=5\\). Describe the net transformation.",
        steps: [
          `<strong>Step 1 — Reflect across \\(x=1\\):</strong> \\(P(1,2)\\) is already on the line \\(x=1\\), so it maps to itself: \\((1,2)\\).`,
          `<strong>Step 2 — Reflect that result across \\(x=5\\):</strong> distance from \\(x=1\\) to \\(x=5\\) is 4, so the image is 4 units past \\(x=5\\), at \\(x=9\\): final point \\((9,2)\\).`,
          `<strong>Step 3 — Identify the net transformation:</strong> the two lines are 4 units apart, so the composition is equivalent to a single translation of \\(2\\times 4=8\\) units in the positive \\(x\\)-direction.`,
        ],
        check: "Directly translating (1,2) by 8 units right gives (9,2) — matches the two-reflection result exactly.",
      },
      {
        h: "Composing two reflections over intersecting lines",
        p: "Two lines intersect at the origin at an angle of \\(30^\\circ\\) between them. A figure is reflected across the first line, then across the second. Describe the net transformation.",
        steps: [
          `<strong>Step 1 — Recall the rule:</strong> two reflections over intersecting lines compose into a rotation about the intersection point, with angle equal to twice the angle between the lines.`,
          `<strong>Step 2 — Apply it:</strong> the angle between the lines is \\(30^\\circ\\), so the net rotation angle is \\(2\\times 30^\\circ=60^\\circ\\), centered at the origin.`,
          `<strong>Conclusion:</strong> the composition is equivalent to a single \\(60^\\circ\\) rotation about the origin.`,
        ],
      },
      {
        h: "A glide reflection",
        p: "Point \\(A(2,3)\\) undergoes a glide reflection: translate by \\((x,y)\\to(x+4,y)\\), then reflect across the \\(x\\)-axis (which is parallel to the translation direction). Find the image.",
        steps: [
          `<strong>Step 1 — Translate:</strong> \\(A(2,3)\\to(2+4,3)=(6,3)\\).`,
          `<strong>Step 2 — Reflect across the \\(x\\)-axis:</strong> \\((6,3)\\to(6,-3)\\).`,
          `<strong>Conclusion:</strong> the image is \\((6,-3)\\), produced by a glide reflection — note the translation direction (horizontal) is indeed parallel to the reflection line (the x-axis), which is what makes it a true glide reflection rather than just an arbitrary pair of transformations.`,
        ],
      },
    ],
    practice: [
      { q: "\\(B(-1,4)\\) is rotated \\(180^\\circ\\) about the origin, then translated by \\((x,y)\\to(x-2,y+1)\\). Find the final image.", a: "Rotate: \\((-1,4)\\to(1,-4)\\). Translate: \\((1,-4)\\to(1-2,-4+1)=(-1,-3)\\)." },
      { q: "Repeat the previous problem with the order swapped (translate first, then rotate). Is the result the same?", a: "Translate first: \\((-1,4)\\to(-3,5)\\). Rotate 180°: \\((-3,5)\\to(3,-5)\\). This is different from \\((-1,-3)\\), confirming order matters." },
      { q: "Two parallel lines are 6 units apart. A figure is reflected across both, in order. What single transformation is equivalent to this composition?", a: "A translation of \\(2\\times 6=12\\) units, in the direction perpendicular to the two lines." },
      { q: "Two lines intersect at \\(45^\\circ\\). A figure is reflected across both, in order. What single transformation is equivalent?", a: "A rotation of \\(2\\times 45^\\circ=90^\\circ\\) about the point where the lines intersect." },
      { q: "What two ingredients must be present for a composition to count as a true \"glide reflection\" rather than just a translation followed by any reflection?", a: "The translation direction must be parallel to the line of reflection. If the reflection line isn't parallel to the translation vector, the composition is still a valid rigid motion, but it isn't classified as a glide reflection." },
    ],
    qa: [
      { q: "Why does the order of a composition matter?", a: "Each transformation changes the figure's position and possibly its orientation, so applying them in a different order generally sends points to different places — Example 2 shows this directly with matching numbers." },
      { q: "Is a composition of two rigid motions always a rigid motion?", a: "Yes. Each individual rigid motion preserves distance and angle measure, so applying one after another still preserves distance and angle measure overall — the final image is always congruent to the original preimage." },
      { q: "How can I tell if two reflections will combine into a translation or a rotation?", a: "Check the two lines of reflection: if they're parallel, the composition is a translation (perpendicular to the lines, distance = 2 × the gap between them). If they intersect, the composition is a rotation about that intersection point (angle = 2 × the angle between the lines)." },
      { q: "Can more than two transformations be composed together?", a: "Yes — compositions can chain any number of rigid motions. Just apply them one at a time, in the exact order given, using the output of each step as the input to the next." },
    ],
  }),
]);

ch["3.5"] = L("3.5", "Line and Rotational Symmetry (MA.912.GR.2.4)", [
  lessonHtml({
    title: "Line and Rotational Symmetry",
    emoji: "❄️",
    overview: `A figure has <strong>symmetry</strong> when some transformation maps it exactly onto itself. <strong>Line symmetry</strong> (or reflection symmetry) means a line of reflection maps the figure onto itself; <strong>rotational symmetry</strong> means some rotation less than a full turn maps the figure onto itself. Many figures — especially regular polygons — have both kinds, and understanding symmetry connects directly back to the transformations of Lessons 3.1–3.3.`,
    toolkit: [
      `A figure has <strong>line symmetry</strong> if there exists a line (a <strong>line of symmetry</strong>) such that reflecting the figure across it produces the identical figure.`,
      `A figure has <strong>rotational symmetry</strong> if some rotation of less than \\(360^\\circ\\) about a center point maps the figure onto itself.`,
      `The <strong>order</strong> of rotational symmetry is the number of times the figure maps onto itself within one full \\(360^\\circ\\) turn (including the starting position). The smallest rotation that works is \\(\\dfrac{360^\\circ}{\\text{order}}\\).`,
      `A regular \\(n\\)-gon has exactly \\(n\\) lines of symmetry and rotational symmetry of order \\(n\\) (smallest angle \\(\\dfrac{360^\\circ}{n}\\)).`,
      `Some figures have only line symmetry, only rotational symmetry, both, or neither — the two types are independent properties.`,
    ],
    examples: [
      {
        h: "Lines of symmetry in a regular polygon",
        p: "How many lines of symmetry does a regular hexagon have?",
        steps: [
          `<strong>Step 1 — Apply the regular-\\(n\\)-gon rule:</strong> a regular \\(n\\)-gon has \\(n\\) lines of symmetry.`,
          `<strong>Step 2 — Substitute \\(n=6\\):</strong> a regular hexagon has 6 lines of symmetry.`,
        ],
        check: "For a regular hexagon, 3 lines pass through opposite vertices and 3 pass through midpoints of opposite sides — 6 total.",
      },
      {
        h: "Finding the order of rotational symmetry",
        p: "A regular pentagon is rotated about its center. What is the order of its rotational symmetry, and what is the smallest angle of rotation that maps it onto itself?",
        steps: [
          `<strong>Step 1 — Apply the regular-\\(n\\)-gon rule:</strong> a regular pentagon (\\(n=5\\)) has rotational symmetry of order 5.`,
          `<strong>Step 2 — Find the smallest angle:</strong> \\(\\dfrac{360^\\circ}{5}=72^\\circ\\).`,
        ],
        check: "Rotating by 72°, 144°, 216°, 288°, or 360° all map the pentagon onto itself — 5 positions total in one full turn.",
      },
      {
        h: "A figure with rotational but not line symmetry",
        p: "Does a standard parallelogram (not a rectangle or rhombus) have line symmetry? Does it have rotational symmetry?",
        steps: [
          `<strong>Step 1 — Test for line symmetry:</strong> try reflecting across a diagonal or across the segment joining midpoints of opposite sides — in a general parallelogram, none of these reflections map the figure onto itself, since the side lengths and angles aren't symmetric that way.`,
          `<strong>Step 2 — Test for rotational symmetry:</strong> rotate the parallelogram \\(180^\\circ\\) about the intersection point of its diagonals — opposite sides and angles swap places exactly, mapping the figure onto itself.`,
          `<strong>Conclusion:</strong> a general parallelogram has rotational symmetry of order 2 (\\(180^\\circ\\)) but no line symmetry.`,
        ],
      },
      {
        h: "A figure with both types of symmetry",
        p: "Identify all lines of symmetry and the order of rotational symmetry for a square.",
        steps: [
          `<strong>Step 1 — Lines of symmetry:</strong> a square has 4 lines of symmetry — the two diagonals, and the two lines connecting midpoints of opposite sides.`,
          `<strong>Step 2 — Rotational symmetry:</strong> a square is a regular 4-gon, so it has rotational symmetry of order 4, with smallest angle \\(\\dfrac{360^\\circ}{4}=90^\\circ\\).`,
        ],
      },
      {
        h: "A figure with neither type of symmetry",
        p: "A scalene triangle (all sides different lengths) is drawn. Does it have line symmetry or rotational symmetry?",
        steps: [
          `<strong>Step 1 — Test for line symmetry:</strong> a line of symmetry in a triangle would need to map each vertex to another vertex at the same distance from the line — but since all three sides (and hence angles) are different, no such line exists.`,
          `<strong>Step 2 — Test for rotational symmetry:</strong> any rotation less than \\(360^\\circ\\) about the triangle's center would need to map vertices to other vertices in a way that preserves the (unequal) side lengths — impossible here.`,
          `<strong>Conclusion:</strong> a scalene triangle has neither line symmetry nor rotational symmetry (other than the trivial \\(360^\\circ\\) rotation, which every figure has).`,
        ],
      },
    ],
    practice: [
      { q: "How many lines of symmetry does a regular octagon have?", a: "8, since a regular n-gon has n lines of symmetry." },
      { q: "What is the order of rotational symmetry of a regular decagon (10 sides), and what is the smallest rotation angle?", a: "Order 10; smallest angle \\(\\dfrac{360^\\circ}{10}=36^\\circ\\)." },
      { q: "Does an isosceles triangle (exactly two congruent sides) have line symmetry? Does it have rotational symmetry (other than 360°)?", a: "Yes to line symmetry — the line through the apex and the midpoint of the base is a line of symmetry. No to rotational symmetry — no rotation less than 360° maps it onto itself, since the two congruent sides would need to swap places while keeping the base fixed, which a rotation cannot do without moving the base." },
      { q: "A rectangle that is not a square: how many lines of symmetry, and what order of rotational symmetry?", a: "2 lines of symmetry (the two lines through midpoints of opposite sides — the diagonals are not lines of symmetry here since the rectangle isn't a square). Rotational symmetry of order 2 (180°)." },
      { q: "The letter \"H\" is drawn in a standard block font. Describe its symmetry.", a: "It has two lines of symmetry (one vertical, one horizontal) and rotational symmetry of order 2 (180°) — both types are present." },
    ],
    qa: [
      { q: "Does every figure have at least the trivial 360° rotational symmetry?", a: "Technically every figure maps onto itself after a full 360° turn, but this isn't counted as \"having rotational symmetry\" — we require a rotation strictly less than 360° for it to count." },
      { q: "Are line symmetry and rotational symmetry always found together?", a: "No — they're independent. A parallelogram (Example 3) has rotational symmetry without line symmetry, while an isosceles triangle has line symmetry without (nontrivial) rotational symmetry. Regular polygons happen to have both." },
      { q: "How do I find the center of rotation for testing rotational symmetry?", a: "For polygons, it's usually the centroid or the intersection of the diagonals (for regular polygons and many quadrilaterals); in general it's the one point equidistant from all the vertices, if such a point exists." },
      { q: "If a figure has rotational symmetry of order \\(n\\), does that tell me anything about its lines of symmetry?", a: "Not directly on its own — order tells you about rotations only. But for regular polygons specifically, the order of rotational symmetry and the number of lines of symmetry are always equal to \\(n\\)." },
    ],
  }),
]);

ch["3.6"] = L("3.6", "Using Transformations to Prove Congruence (MA.912.GR.2.6)", [
  lessonHtml({
    title: "Using Transformations to Prove Congruence",
    emoji: "✅",
    overview: `We can now give a precise, modern definition of congruence: two figures are <strong>congruent</strong> if and only if there exists a sequence of rigid motions — translations, reflections, and rotations — that maps one exactly onto the other. Because every rigid motion preserves distance and angle measure, such a mapping automatically guarantees that all corresponding sides and angles match. This transformation-based view of congruence is the bridge to the triangle congruence criteria (SSS, SAS, ASA, AAS) explored in Chapter 4.`,
    toolkit: [
      `<strong>Definition:</strong> figure \\(A\\) is congruent to figure \\(B\\) if and only if there is a sequence of rigid motions mapping \\(A\\) exactly onto \\(B\\).`,
      `<strong>General strategy:</strong> (1) translate to map one corresponding point onto its image, (2) rotate about that point to align a side, (3) reflect if needed to fix the orientation, so the whole figure lands exactly on top of its image.`,
      `Because each rigid motion in the sequence preserves distance and angle measure, the final mapping automatically makes every pair of corresponding sides and angles congruent.`,
      `A full solution states each transformation with its explicit rule (or description) in order, followed by a concluding congruence statement.`,
      `This transformation view of congruence is the same idea underlying <strong>CPCTC</strong> (corresponding parts of congruent triangles are congruent) — once a rigid-motion mapping exists, corresponding parts are congruent for free.`,
    ],
    examples: [
      {
        h: "A single translation proves congruence",
        p: "\\(\\triangle ABC\\) has \\(A(1,1)\\), \\(B(4,1)\\), \\(C(1,3)\\). \\(\\triangle DEF\\) has \\(D(5,-2)\\), \\(E(8,-2)\\), \\(F(5,0)\\). Describe a rigid motion mapping \\(\\triangle ABC\\) onto \\(\\triangle DEF\\), and conclude the triangles are congruent.",
        steps: [
          `<strong>Step 1 — Compare corresponding vertices:</strong> \\(A\\to D\\) requires \\((1,1)\\to(5,-2)\\), a shift of \\((+4,-3)\\).`,
          `<strong>Step 2 — Test the same shift on the other vertices:</strong> \\(B(4,1)+(4,-3)=(8,-2)=E\\). ✓ \\(C(1,3)+(4,-3)=(5,0)=F\\). ✓`,
          `<strong>Step 3 — State the transformation:</strong> the translation \\((x,y)\\to(x+4,y-3)\\) maps \\(A\\to D\\), \\(B\\to E\\), \\(C\\to F\\).`,
          `<strong>Conclusion:</strong> since a single rigid motion maps \\(\\triangle ABC\\) exactly onto \\(\\triangle DEF\\), \\(\\triangle ABC\\cong\\triangle DEF\\).`,
        ],
      },
      {
        h: "A rotation plus a translation",
        p: "\\(\\triangle ABC\\) has \\(A(0,0)\\), \\(B(3,0)\\), \\(C(0,2)\\). \\(\\triangle A'B'C'\\) has \\(A'(5,4)\\), \\(B'(5,7)\\), \\(C'(3,4)\\). Describe a sequence of rigid motions mapping one onto the other.",
        steps: [
          `<strong>Step 1 — Try a rotation first:</strong> rotating \\(\\triangle ABC\\) by \\(90^\\circ\\) counterclockwise about the origin, \\((x,y)\\to(-y,x)\\), gives \\(A(0,0)\\to(0,0)\\), \\(B(3,0)\\to(0,3)\\), \\(C(0,2)\\to(-2,0)\\).`,
          `<strong>Step 2 — Find the needed translation:</strong> comparing \\(A(0,0)\\) to the target \\(A'(5,4)\\), we need a translation of \\((+5,+4)\\). Check: \\((0,3)+(5,4)=(5,7)=B'\\). ✓ \\((-2,0)+(5,4)=(3,4)=C'\\). ✓`,
          `<strong>Step 3 — State the full sequence:</strong> rotate \\(90^\\circ\\) counterclockwise about the origin, then translate by \\((x,y)\\to(x+5,y+4)\\).`,
          `<strong>Conclusion:</strong> since this sequence of rigid motions maps \\(\\triangle ABC\\) exactly onto \\(\\triangle A'B'C'\\), the two triangles are congruent.`,
        ],
      },
      {
        h: "When a reflection is required",
        p: "\\(\\triangle ABC\\) has \\(A(0,0)\\), \\(B(4,0)\\), \\(C(0,2)\\), listed counterclockwise. \\(\\triangle A'B'C'\\) has \\(A'(0,0)\\), \\(B'(-4,0)\\), \\(C'(0,2)\\), listed clockwise. Explain why a reflection (not just a rotation) is needed, and describe one.",
        steps: [
          `<strong>Step 1 — Compare orientation:</strong> \\(\\triangle ABC\\) is labeled counterclockwise, but \\(\\triangle A'B'C'\\) is labeled clockwise — no rotation or translation alone can change orientation, only a reflection can.`,
          `<strong>Step 2 — Find the reflection:</strong> reflecting \\(\\triangle ABC\\) across the \\(y\\)-axis, \\((x,y)\\to(-x,y)\\), gives \\(A(0,0)\\to(0,0)\\), \\(B(4,0)\\to(-4,0)\\), \\(C(0,2)\\to(0,2)\\) — exactly \\(A'\\), \\(B'\\), \\(C'\\).`,
          `<strong>Conclusion:</strong> a single reflection across the \\(y\\)-axis maps \\(\\triangle ABC\\) onto \\(\\triangle A'B'C'\\), so the triangles are congruent — and a reflection was necessary because the orientation flipped.`,
        ],
      },
      {
        h: "Connecting to corresponding parts",
        p: "In Example 1, once you've shown the translation maps \\(A\\to D\\), \\(B\\to E\\), \\(C\\to F\\), what can you immediately conclude about \\(\\overline{AB}\\) and \\(\\overline{DE}\\), and about \\(\\angle A\\) and \\(\\angle D\\)?",
        steps: [
          `<strong>Step 1 — Recall that a translation is a rigid motion:</strong> rigid motions preserve distance and angle measure.`,
          `<strong>Step 2 — Apply this to corresponding sides:</strong> since the translation maps \\(A\\to D\\) and \\(B\\to E\\), it maps segment \\(\\overline{AB}\\) exactly onto segment \\(\\overline{DE}\\), so \\(\\overline{AB}\\cong\\overline{DE}\\).`,
          `<strong>Step 3 — Apply this to corresponding angles:</strong> similarly, the translation maps \\(\\angle A\\) exactly onto \\(\\angle D\\), so \\(\\angle A\\cong\\angle D\\).`,
          `<strong>Conclusion:</strong> once a rigid-motion mapping between two figures is established, every pair of corresponding sides and angles is automatically congruent — this is the transformation-based justification behind CPCTC.`,
        ],
      },
      {
        h: "Describing a full congruence transformation sequence",
        p: "Write a complete justification that quadrilateral \\(PQRS\\) with \\(P(1,1)\\), \\(Q(3,1)\\), \\(R(3,3)\\), \\(S(1,3)\\) is congruent to quadrilateral \\(P'Q'R'S'\\) with \\(P'(-1,-1)\\), \\(Q'(-3,-1)\\), \\(R'(-3,-3)\\), \\(S'(-1,-3)\\).",
        steps: [
          `<strong>Step 1 — Test a single transformation:</strong> a \\(180^\\circ\\) rotation about the origin, \\((x,y)\\to(-x,-y)\\), gives \\(P(1,1)\\to(-1,-1)=P'\\), \\(Q(3,1)\\to(-3,-1)=Q'\\), \\(R(3,3)\\to(-3,-3)=R'\\), \\(S(1,3)\\to(-1,-3)=S'\\).`,
          `<strong>Step 2 — Confirm every vertex matches:</strong> all four vertices map exactly to their primed counterparts.`,
          `<strong>Conclusion:</strong> since a single rigid motion (a \\(180^\\circ\\) rotation about the origin) maps \\(PQRS\\) exactly onto \\(P'Q'R'S'\\), \\(PQRS\\cong P'Q'R'S'\\) — with every corresponding side and angle automatically congruent.`,
        ],
      },
    ],
    practice: [
      { q: "\\(\\triangle ABC\\) has \\(A(2,3)\\), \\(B(5,3)\\), \\(C(2,6)\\). \\(\\triangle DEF\\) has \\(D(-1,0)\\), \\(E(2,0)\\), \\(F(-1,3)\\). Find the translation mapping one onto the other, and state the congruence conclusion.", a: "The rule \\((x,y)\\to(x-3,y-3)\\) maps \\(A\\to D\\), \\(B\\to E\\), \\(C\\to F\\), so \\(\\triangle ABC\\cong\\triangle DEF\\)." },
      { q: "\\(\\triangle ABC\\) is listed clockwise; its image \\(\\triangle A'B'C'\\) is listed counterclockwise. What type of rigid motion must be part of the sequence mapping one to the other?", a: "A reflection must be involved, since only a reflection (or a composition containing one) reverses orientation; a rotation or translation alone cannot." },
      { q: "\\(P(2,0)\\), \\(Q(0,2)\\) map to \\(P'(-2,0)\\), \\(Q'(0,-2)\\) under a single rotation about the origin. What rotation was used?", a: "This matches \\((x,y)\\to(-x,-y)\\), a \\(180^\\circ\\) rotation about the origin." },
      { q: "Once two triangles are shown congruent via a rigid-motion mapping, why can you immediately conclude \\(\\angle B\\cong\\angle E\\) (say) without measuring?", a: "Because the mapping is made of rigid motions, and rigid motions preserve angle measure by definition — so any angle in the preimage is automatically congruent to its corresponding image angle." },
      { q: "Describe, in general terms (without specific coordinates), the three-step strategy for finding a sequence of rigid motions between two congruent figures.", a: "First translate so that one pair of corresponding points coincide. Then rotate about that shared point until a pair of corresponding sides line up. Finally, reflect if needed to correct the orientation so the whole figure lies exactly on top of the target figure." },
    ],
    qa: [
      { q: "How is this transformation definition of congruence different from just saying \"same size and shape\"?", a: "\"Same size and shape\" is an informal description. The transformation definition is precise and testable: you can actually name the specific rigid motions and verify, coordinate by coordinate, that they map one figure exactly onto the other." },
      { q: "Do I always need all three types of rigid motions (translation, rotation, reflection) to prove two figures congruent?", a: "No — you only need whichever ones are actually necessary. Sometimes a single translation suffices (Example 1); other times you need a rotation and a translation together (Example 2), or a reflection when orientation is reversed (Example 3)." },
      { q: "How does this connect to the SSS/SAS/ASA/AAS triangle congruence shortcuts from Chapter 4?", a: "Those shortcuts are a practical way to prove congruence without explicitly constructing a rigid-motion sequence every time — but they're justified by exactly this transformation idea underneath. If you know three sides match (SSS), a rigid-motion mapping between the triangles is guaranteed to exist." },
      { q: "If I can find a rigid-motion sequence mapping figure A onto figure B, does that also mean I could map B onto A?", a: "Yes — every rigid motion has an inverse that is also a rigid motion (e.g., a translation's inverse is the opposite translation; a rotation's inverse is the same rotation in the opposite direction). So congruence works both ways, exactly as you'd expect." },
    ],
  }),
]);
