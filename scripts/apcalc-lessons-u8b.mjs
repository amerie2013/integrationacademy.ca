// AP Calculus AB exam prep — Unit 8 (Applications of Integration), lessons 8.6–8.10.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
// As in u8a, none of these examples is reused in the bank, the free-response
// questions or the worksheets.
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u8b = {};

// ───────────────────────── 8.6 ─────────────────────────
u8b["8.6"] = lesson({
  code: "8.6", unit: 8, official: "8.6", calc: "Both",
  title: "Regions with More Than One Piece",
  parts: () => {
    const g = plot({ w: 400, h: 260, x: [-0.4, 3.6], y: [-1.5, 1.6], alt: "The graphs of y = sin x and y = cos x on [0, π], crossing at x = π/4" });
    g.shade(Math.cos, Math.sin, 0, Math.PI / 4, { color: C.alt }).shade(Math.sin, Math.cos, Math.PI / 4, Math.PI).curve(Math.sin, 0, Math.PI).curve(Math.cos, 0, Math.PI, { color: C.alt }).dot(Math.PI / 4, Math.SQRT1_2).label(1.75, 1.2, "y = sin x").label(2.2, -1.05, "y = cos x", { color: C.alt }).vline(Math.PI, { color: C.grey });
    return [
      lede(r`"Top minus bottom" assumes that the same curve stays on top. When two curves cross inside the interval they swap roles, and a single integral of \(f-g\) then subtracts one part of the region from another. The answer it gives is real, but it is not an area. This lesson is about noticing the crossing and dealing with it.`),
      goals([
        r`Find every intersection inside the interval, not only the ends.`,
        r`Write an area as a sum of integrals, one for each piece.`,
        r`Explain the difference between \(\displaystyle\int_a^b(f-g)\,dx\) and the area between \(f\) and \(g\).`,
        r`Use \(\displaystyle\int_a^b|f(x)-g(x)|\,dx\) on the calculator.`,
      ]),

      sec("One formula that is always right"),
      thm("Area between two curves, in general", r`<p>The area between the graphs of \(f\) and \(g\) from \(x=a\) to \(x=b\) is</p>\[ A=\int_a^b\big|f(x)-g(x)\big|\,dx. \]`),
      p(r`On a calculator, type exactly that. By hand, an absolute value cannot be integrated directly: find where \(f(x)=g(x)\), split the interval at those points, and on each piece integrate whichever function is larger minus the other.`),
      figure(g, r`On \(\left[0,\tfrac{\pi}{4}\right]\) the cosine is on top; on \(\left[\tfrac{\pi}{4},\pi\right]\) the sine is. The area is the sum of two integrals with the subtraction reversed.`),

      sec("Worked examples"),
      ex("core", "A cubic and a line", r`Find the area of the region between \(y=x^3\) and \(y=x\) for \(-1\le x\le1\).`, [
        r`\(x^3=x\) at \(x=-1,0,1\). The curves cross at \(x=0\).`,
        r`On \([-1,0]\) the cubic is on top (at \(x=-\tfrac12\): \(-\tfrac18\gt-\tfrac12\)); on \([0,1]\) the line is.`,
        r`\(\displaystyle\int_{-1}^{0}(x^3-x)\,dx+\int_0^1(x-x^3)\,dx=\tfrac14+\tfrac14\).`,
      ], r`Area \(=\tfrac12\). The single integral \(\displaystyle\int_{-1}^{1}(x-x^3)\,dx\) is 0.`),
      ex("exam", "Sine and cosine", r`Find the area between \(y=\sin x\) and \(y=\cos x\) for \(0\le x\le\pi\).`, [
        r`\(\sin x=\cos x\) at \(x=\dfrac{\pi}{4}\) in this interval.`,
        r`\(\displaystyle\int_0^{\pi/4}(\cos x-\sin x)\,dx=\Big[\sin x+\cos x\Big]_0^{\pi/4}=\sqrt2-1\).`,
        r`\(\displaystyle\int_{\pi/4}^{\pi}(\sin x-\cos x)\,dx=\Big[-\cos x-\sin x\Big]_{\pi/4}^{\pi}=1+\sqrt2\).`,
      ], r`Area \(=(\sqrt2-1)+(1+\sqrt2)=2\sqrt2\).`),
      ex("exam", "Three intersections", r`Find the total area enclosed by \(y=x^3-3x\) and \(y=x\).`, [
        r`\(x^3-3x=x\) gives \(x(x-2)(x+2)=0\): \(x=-2,0,2\).`,
        r`On \([-2,0]\) the cubic is on top: \(\displaystyle\int_{-2}^{0}(x^3-4x)\,dx=\Big[\tfrac{x^4}{4}-2x^2\Big]_{-2}^{0}=0-(4-8)=4\).`,
        r`On \([0,2]\) the line is on top, and by symmetry that piece is also 4.`,
      ], r`Total area \(=8\).`),
      ex("stretch", "Let the calculator split it", r`Find the area between \(y=x^2\) and \(y=2^x\) for \(0\le x\le3\), to three decimal places.`, [
        r`The curves cross at \(x=2\) inside the interval, so the difference changes sign.`,
        r`Area \(=\displaystyle\int_0^3\big|x^2-2^x\big|\,dx\).`,
      ], r`Area \(\approx2.224\). Written with the absolute value, the set-up is complete and correct without finding the crossing at all.`),

      sec("Common errors"),
      mistake("one integral across a crossing", r`<p>If the curves cross at \(x=c\) inside \([a,b]\), then \(\displaystyle\int_a^b(f-g)\,dx\) is "area where \(f\) is on top" minus "area where \(g\) is on top". It is not the area between them.</p>`),
      mistake("missing an interior intersection", r`<p>Solve \(f(x)=g(x)\) completely. When you divide both sides by \(x\), you discard the solution \(x=0\).</p>`),
      mistake("absolute value outside the integral", r`<p>\(\left|\displaystyle\int_a^b(f-g)\,dx\right|\) only removes the sign of the net result. The bars belong inside: \(\displaystyle\int_a^b|f-g|\,dx\).</p>`),
      mistake("relying on symmetry that is not there", r`<p>Doubling one piece is valid only when the pieces are congruent. Check, or compute both.</p>`),

      sec("Write it so it scores"),
      justify(
        r`The graphs of \(f\) and \(g\) intersect at \(x=1\), \(x=3\) and \(x=6\), with \(f(x)\gt g(x)\) on \((1,3)\) and \(g(x)\gt f(x)\) on \((3,6)\). Write an expression involving one or more integrals for the total area of the regions enclosed by the two graphs.`,
        r`Area \(=\displaystyle\int_1^3\big[f(x)-g(x)\big]dx+\int_3^6\big[g(x)-f(x)\big]dx\).`,
        r`Each integral has the larger function first and its own limits. A single integral from 1 to 6 would not earn the integrand point, because its value is a difference of the two areas.`,
      ),
      exam(r`<p>The exam often asks for the same two curves twice: once for \(\displaystyle\int_a^b\big[f(x)-g(x)\big]dx\) and once for the area. They are different questions with different answers, and the second is never smaller in size than the first.</p>`),

      sec("Practice"),
      pq(r`Find the total area between \(f(x)=x(x-1)(x-2)\) and the \(x\)-axis for \(0\le x\le2\).`, r`\(\displaystyle\int_0^1f=\tfrac14\) and \(\displaystyle\int_1^2f=-\tfrac14\). Area \(\tfrac12\); the net integral is 0.`, "core"),
      pq(r`Find the area between \(y=\cos x\) and the \(x\)-axis for \(0\le x\le\dfrac{3\pi}{2}\).`, r`\(\displaystyle\int_0^{\pi/2}\cos x\,dx=1\) and \(\left|\displaystyle\int_{\pi/2}^{3\pi/2}\cos x\,dx\right|=2\). Area 3.`, "core"),
      pq(r`Find the area between \(y=x^2-9\) and the \(x\)-axis for \(0\le x\le4\).`, r`\(\displaystyle\int_0^3(9-x^2)\,dx=18\) and \(\displaystyle\int_3^4(x^2-9)\,dx=\tfrac{10}{3}\). Area \(\tfrac{64}{3}\).`, "exam"),
      pq(r`(Calculator.) Find the area between \(y=e^x\) and \(y=3\) for \(0\le x\le2\), to three decimal places.`, r`\(\displaystyle\int_0^2|e^x-3|\,dx\approx2.981\). (They cross at \(x=\ln3\).)`, "exam"),
      pq(r`For two continuous functions, \(\displaystyle\int_0^5\big[f(x)-g(x)\big]dx=2\) and the area between the graphs on \([0,5]\) is 12. The graphs cross once. Find the area of the piece on which \(g\) is on top.`, r`If \(P\) and \(Q\) are the areas where \(f\) and \(g\) are on top, \(P-Q=2\) and \(P+Q=12\), so \(Q=5\).`, "stretch"),

      sec("Summary"),
      key([
        ["Always true", r`Area \(=\displaystyle\int_a^b|f-g|\,dx\).`],
        ["By hand", "Split at every crossing; larger minus smaller on each piece."],
        ["Calculator", "Type the absolute value and integrate once."],
        ["Warning", r`\(\displaystyle\int(f-g)\) across a crossing is a net value.`],
      ]),
    ];
  },
});

// ───────────────────────── 8.7 ─────────────────────────
u8b["8.7"] = lesson({
  code: "8.7", unit: 8, official: "8.7–8.8", calc: "No calculator",
  title: "Volumes from Known Cross-Sections",
  parts: () => {
    const g = plot({ w: 380, h: 250, x: [-0.5, 4.8], y: [-0.6, 2.8], alt: "The base region under y = √x from x = 0 to x = 4, with one vertical segment marking the base of a cross-section" });
    g.shade((x) => Math.sqrt(x), () => 0, 0, 4).curve((x) => Math.sqrt(x), 0, 4).seg(4, 0, 4, 2).seg(2.25, 0, 2.25, 1.5, { color: C.gold, width: 3.2 }).label(2.4, 0.7, "s = √x", { color: C.gold }).label(1.1, 1.45, "y = √x");
    return [
      lede(r`A loaf of bread has a volume you can find by slicing it: add up the area of each slice times its thickness. If you know the area of the slice at every position \(x\), the volume is an integral of that area. In this lesson the slices are simple shapes, squares, semicircles and triangles, standing upright on a flat base region, and the whole problem reduces to one question: how long is the base of the slice at \(x\)?`),
      goals([
        r`Express the side of a cross-section in terms of \(x\) or \(y\) from the base region.`,
        r`Write the cross-section's area for squares, rectangles, semicircles and triangles.`,
        r`Integrate the area to find the volume.`,
        r`Handle cross-sections perpendicular to the \(y\)-axis.`,
      ]),

      sec("Volume is an integral of area"),
      thm("Volume by cross-sections", r`<p>If a solid lies between \(x=a\) and \(x=b\), and its cross-section perpendicular to the \(x\)-axis at \(x\) has area \(A(x)\), then</p>\[ V=\int_a^bA(x)\,dx. \]`),
      p(r`The base of the solid is a region in the plane. A cross-section perpendicular to the \(x\)-axis stands on a vertical segment of that region, whose length is \(s=\text{top}-\text{bottom}\). Everything else is the area formula for the shape.`),
      figure(g, r`The base region under \(y=\sqrt x\). The cross-section at \(x\) stands on the gold segment, of length \(s=\sqrt x\).`),
      table(
        ["Cross-section", "Area in terms of the base length \\(s\\)"],
        [
          ["Square", r`\(s^2\)`],
          [r`Rectangle of height \(h\)`, r`\(s\cdot h\)`],
          [r`Semicircle with diameter \(s\)`, r`\(\dfrac{\pi}{8}s^2\)`],
          ["Equilateral triangle", r`\(\dfrac{\sqrt3}{4}s^2\)`],
          ["Isosceles right triangle, a leg on the base", r`\(\dfrac12s^2\)`],
          ["Isosceles right triangle, hypotenuse on the base", r`\(\dfrac14s^2\)`],
        ],
      ),

      sec("Worked examples"),
      ex("core", "Squares", r`The base of a solid is the region under \(y=\sqrt x\) for \(0\le x\le4\). Cross-sections perpendicular to the \(x\)-axis are squares. Find the volume.`, [
        r`Side: \(s=\sqrt x\). Area: \(A(x)=s^2=x\).`,
        r`\(V=\displaystyle\int_0^4x\,dx\).`,
      ], r`\(V=8\).`),
      ex("exam", "The same base, other shapes", r`For the same base, find the volume if the cross-sections are (a) semicircles with diameters in the base, (b) equilateral triangles.`, [
        r`(a) Radius \(\dfrac{\sqrt x}{2}\), so \(A(x)=\dfrac12\pi\cdot\dfrac x4=\dfrac{\pi}{8}x\) and \(V=\dfrac{\pi}{8}\cdot8\).`,
        r`(b) \(A(x)=\dfrac{\sqrt3}{4}x\) and \(V=\dfrac{\sqrt3}{4}\cdot8\).`,
      ], r`(a) \(V=\pi\). (b) \(V=2\sqrt3\). Only the constant in front changes.`),
      ex("exam", "A circular base", r`The base of a solid is the disc \(x^2+y^2\le4\). Cross-sections perpendicular to the \(x\)-axis are squares. Find the volume.`, [
        r`At \(x\), the base runs from \(y=-\sqrt{4-x^2}\) to \(y=\sqrt{4-x^2}\), so \(s=2\sqrt{4-x^2}\).`,
        r`\(A(x)=4(4-x^2)\).`,
        r`\(V=\displaystyle\int_{-2}^{2}4(4-x^2)\,dx=4\cdot\tfrac{32}{3}\).`,
      ], r`\(V=\tfrac{128}{3}\).`),
      ex("stretch", "Perpendicular to the y-axis", r`The base of a solid is the region bounded by \(y=x^2\) and \(y=4\). Cross-sections perpendicular to the \(y\)-axis are (a) squares, (b) isosceles right triangles with a leg in the base. Find each volume.`, [
        r`A slice at height \(y\) stands on a horizontal segment from \(x=-\sqrt y\) to \(x=\sqrt y\): \(s=2\sqrt y\).`,
        r`(a) \(A(y)=4y\), so \(V=\displaystyle\int_0^44y\,dy\).`,
        r`(b) \(A(y)=\tfrac12s^2=2y\), so \(V=\displaystyle\int_0^42y\,dy\).`,
      ], r`(a) \(V=32\). (b) \(V=16\).`),

      sec("Common errors"),
      mistake("integrating the side and not the area", r`<p>\(\displaystyle\int s\,dx\) is the area of the base. The volume needs \(\displaystyle\int A(x)\,dx\), with the side squared.</p>`),
      mistake("the semicircle's radius", r`<p>The base segment is the diameter. The radius is \(\dfrac s2\), so the area is \(\dfrac12\pi\left(\dfrac s2\right)^2=\dfrac{\pi}{8}s^2\), not \(\dfrac{\pi}{2}s^2\).</p>`),
      mistake("half the base", r`<p>For a region symmetric about the \(x\)-axis, the base of the slice is the full width \(2y\), not \(y\). Squaring half the width loses a factor of 4.</p>`),
      mistake("a factor of π that does not belong", r`<p>Nothing is being rotated here. \(\pi\) appears only when the cross-section itself is part of a circle.</p>`),

      sec("Write it so it scores"),
      justify(
        r`The region \(R\) is bounded by the graphs of \(y=6-x\) and \(y=x^2\) for \(-3\le x\le2\). \(R\) is the base of a solid whose cross-sections perpendicular to the \(x\)-axis are semicircles with diameters in \(R\). Write, but do not evaluate, an integral expression for the volume of the solid.`,
        r`\(V=\displaystyle\int_{-3}^{2}\frac{\pi}{8}\big[(6-x)-x^2\big]^2\,dx\).`,
        r`The diameter is top minus bottom, the constant \(\dfrac{\pi}{8}\) accounts for the radius being half the diameter, and the whole difference is squared. A reader gives one point for the integrand and one for the limits and constant.`,
      ),
      exam(r`<p>The cross-section part is normally the last part of an area-and-volume question and is worth two or three points, usually for the set-up alone. Write the side length first, then the area, then the integral.</p>`),

      sec("Practice"),
      pq(r`The base of a solid is the region bounded by \(y=3x\), the \(x\)-axis and \(x=2\). Cross-sections perpendicular to the \(x\)-axis are squares. Find the volume.`, r`\(\displaystyle\int_0^29x^2\,dx=24\).`, "core"),
      pq(r`The base of a solid is the region between \(y=x\) and \(y=x^2\). Cross-sections perpendicular to the \(x\)-axis are rectangles of height 5. Find the volume.`, r`\(\displaystyle\int_0^15(x-x^2)\,dx=\tfrac56\).`, "core"),
      pq(r`The base of a solid is the region under \(y=\sqrt{\sin x}\) for \(0\le x\le\pi\). Cross-sections perpendicular to the \(x\)-axis are squares. Find the volume.`, r`\(\displaystyle\int_0^{\pi}\sin x\,dx=2\).`, "exam"),
      pq(r`The base of a solid is a disc of radius 3. Cross-sections perpendicular to a diameter are isosceles right triangles with a leg in the base. Find the volume.`, r`\(s=2\sqrt{9-x^2}\), \(A=\tfrac12s^2=2(9-x^2)\). \(\displaystyle\int_{-3}^{3}2(9-x^2)\,dx=72\).`, "exam"),
      pq(r`The base of a solid is the region between \(y=\sqrt x\) and \(y=\dfrac x2\). Cross-sections perpendicular to the \(x\)-axis are squares. Find the volume.`, r`\(\displaystyle\int_0^4\left(\sqrt x-\tfrac x2\right)^2dx=\int_0^4\left(x-x^{3/2}+\tfrac{x^2}{4}\right)dx=8-\tfrac{64}{5}+\tfrac{16}{3}=\tfrac{8}{15}\).`, "stretch"),

      sec("Summary"),
      key([
        ["Volume", r`\(\displaystyle\int_a^bA(x)\,dx\).`],
        ["Side", "Top minus bottom of the base region."],
        ["Semicircle", r`\(\dfrac{\pi}{8}s^2\).`],
        ["Equilateral", r`\(\dfrac{\sqrt3}{4}s^2\).`],
      ]),
    ];
  },
});

// ───────────────────────── 8.8 ─────────────────────────
u8b["8.8"] = lesson({
  code: "8.8", unit: 8, official: "8.9–8.10", calc: "Both",
  title: "Solids of Revolution: Discs",
  parts: () => {
    const g = plot({ w: 380, h: 280, x: [-0.5, 4.8], y: [-2.6, 2.6], alt: "The region under y = √x on [0, 4] and its mirror image below the x-axis, with one radius drawn" });
    g.shade((x) => Math.sqrt(x), (x) => -Math.sqrt(x), 0, 4, { opacity: 0.1 }).shade((x) => Math.sqrt(x), () => 0, 0, 4).curve((x) => Math.sqrt(x), 0, 4).curve((x) => -Math.sqrt(x), 0, 4, { dash: "5 5", color: C.grey }).seg(4, -2, 4, 2, { color: C.grey }).seg(2.25, 0, 2.25, 1.5, { color: C.gold, width: 3.2 }).label(2.4, 0.75, "r = √x", { color: C.gold });
    return [
      lede(r`Spin a flat region about a line and it sweeps out a solid: a region under a curve becomes something like a vase or a bullet. Slice that solid perpendicular to the axis it was spun about and every slice is a circle. So this is the previous lesson again with one shape of cross-section, and one thing to find: the radius.`),
      goals([
        r`Set up a disc integral for a region rotated about the \(x\)-axis or the \(y\)-axis.`,
        r`Rotate about another horizontal or vertical line when the region touches it.`,
        r`Identify the radius as a distance from the axis of rotation.`,
        r`Match the variable of integration to the axis.`,
      ]),

      sec("The disc method"),
      thm("Volume by discs", r`<p>If the region between \(y=f(x)\) and the \(x\)-axis on \([a,b]\) is rotated about the \(x\)-axis, the volume is</p>\[ V=\pi\int_a^b\big[f(x)\big]^2\,dx. \]<p>Each cross-section is a disc of radius \(r=f(x)\) and area \(\pi r^2\).</p>`),
      figure(g, r`Rotating the region under \(y=\sqrt x\) about the \(x\)-axis. The slice at \(x\) is a disc whose radius is the gold segment.`),
      p(r`The method applies whenever the region is <strong>flush against the axis of rotation</strong>, so that the slices are solid discs with no hole.`),
      table(
        ["Axis of rotation", "Slices are stacked along", "Integrate in", "Radius"],
        [
          [r`the \(x\)-axis`, r`\(x\)`, r`\(dx\)`, r`\(y\)-value of the curve`],
          [r`the \(y\)-axis`, r`\(y\)`, r`\(dy\)`, r`\(x\)-value of the curve`],
          [r`the line \(y=k\)`, r`\(x\)`, r`\(dx\)`, r`distance from the curve to \(y=k\)`],
          [r`the line \(x=h\)`, r`\(y\)`, r`\(dy\)`, r`distance from the curve to \(x=h\)`],
        ],
      ),

      sec("Worked examples"),
      ex("core", "About the x-axis", r`The region under \(y=\sqrt x\) for \(0\le x\le4\) is rotated about the \(x\)-axis. Find the volume.`, [
        r`Radius \(r=\sqrt x\), so \(\pi r^2=\pi x\).`,
        r`\(V=\pi\displaystyle\int_0^4x\,dx\).`,
      ], r`\(V=8\pi\).`),
      ex("exam", "About the y-axis", r`The region bounded by \(y=x^3\), \(y=8\) and the \(y\)-axis is rotated about the \(y\)-axis. Find the volume.`, [
        r`The slices are horizontal, so integrate in \(y\). The radius is the \(x\)-value: \(x=y^{1/3}\).`,
        r`\(V=\pi\displaystyle\int_0^8y^{2/3}\,dy=\pi\Big[\tfrac35y^{5/3}\Big]_0^8=\pi\cdot\tfrac35\cdot32\).`,
      ], r`\(V=\dfrac{96\pi}{5}\).`),
      ex("exam", "About a line other than an axis", r`The region enclosed by \(y=x^2\) and \(y=4\) is rotated about the line \(y=4\). Find the volume.`, [
        r`The region touches the line \(y=4\) along its whole top edge, so the slices are discs.`,
        r`Radius: the distance from the parabola up to the line, \(r=4-x^2\).`,
        r`\(V=\pi\displaystyle\int_{-2}^{2}(4-x^2)^2\,dx=\pi\int_{-2}^{2}(16-8x^2+x^4)\,dx=\pi\left(64-\tfrac{128}{3}+\tfrac{64}{5}\right)\).`,
      ], r`\(V=\dfrac{512\pi}{15}\).`),
      ex("stretch", "The volume of a sphere", r`Derive the volume of a sphere of radius \(a\) by rotating the region under \(y=\sqrt{a^2-x^2}\) about the \(x\)-axis.`, [
        r`\(r^2=a^2-x^2\), for \(-a\le x\le a\).`,
        r`\(V=\pi\displaystyle\int_{-a}^{a}(a^2-x^2)\,dx=\pi\Big[a^2x-\tfrac{x^3}{3}\Big]_{-a}^{a}=\pi\left(2a^3-\tfrac{2a^3}{3}\right)\).`,
      ], r`\(V=\tfrac43\pi a^3\).`),

      sec("Common errors"),
      mistake("forgetting to square, or forgetting π", r`<p>The integrand is an <em>area</em>: \(\pi r^2\). \(\pi\displaystyle\int f(x)\,dx\) and \(\displaystyle\int\big[f(x)\big]^2dx\) are both wrong.</p>`),
      mistake("the wrong variable", r`<p>Rotation about a vertical line stacks the slices vertically, so the integral is in \(y\) and the radius is an \(x\)-value written in terms of \(y\).</p>`),
      mistake("radius measured from the wrong place", r`<p>The radius is a distance to the axis of rotation. About \(y=4\), the radius for \(y=x^2\) is \(4-x^2\), not \(x^2\).</p>`),
      mistake("squaring before subtracting the wrong things", r`<p>\((4-x^2)^2\) is not \(16-x^4\). Expand fully before integrating by hand.</p>`),

      sec("Write it so it scores"),
      justify(
        r`The region bounded by the graph of \(y=e^{x}\), the line \(y=1\) and the line \(x=2\) is rotated about the line \(y=1\). Write, but do not evaluate, an integral expression for the volume of the solid.`,
        r`\(V=\pi\displaystyle\int_0^2\big(e^{x}-1\big)^2\,dx\).`,
        r`The region lies against \(y=1\), so there is a single radius, \(e^x-1\), measured from the axis of rotation. The reader looks for the constant \(\pi\), the squared radius and the limits \(0\) and \(2\).`,
      ),
      exam(r`<p>"Write, but do not evaluate" means stop at the integral. Expanding the square is unnecessary and is a place to lose a point you already had.</p>`),

      sec("Practice"),
      pq(r`The region under \(y=2x\) for \(0\le x\le3\) is rotated about the \(x\)-axis. Find the volume.`, r`\(\pi\displaystyle\int_0^34x^2\,dx=36\pi\).`, "core"),
      pq(r`The region under \(y=\sqrt{\cos x}\) for \(0\le x\le\dfrac{\pi}{2}\) is rotated about the \(x\)-axis. Find the volume.`, r`\(\pi\displaystyle\int_0^{\pi/2}\cos x\,dx=\pi\).`, "core"),
      pq(r`The region under \(y=e^{-x}\) for \(0\le x\le\ln2\) is rotated about the \(x\)-axis. Find the volume.`, r`\(\pi\displaystyle\int_0^{\ln2}e^{-2x}\,dx=\dfrac{\pi}{2}\left(1-\dfrac14\right)=\dfrac{3\pi}{8}\).`, "exam"),
      pq(r`The region bounded by \(x=\dfrac1y\), the \(y\)-axis, \(y=1\) and \(y=4\) is rotated about the \(y\)-axis. Find the volume.`, r`\(\pi\displaystyle\int_1^4\dfrac{1}{y^2}\,dy=\pi\left(1-\dfrac14\right)=\dfrac{3\pi}{4}\).`, "exam"),
      pq(r`The region bounded by \(y=\sqrt x\), \(y=2\) and the \(y\)-axis is rotated about the line \(y=2\). Find the volume.`, r`\(r=2-\sqrt x\). \(\pi\displaystyle\int_0^4(4-4\sqrt x+x)\,dx=\pi\left(16-\tfrac{64}{3}+8\right)=\dfrac{8\pi}{3}\).`, "exam"),
      pq(r`Derive the volume of a cone of height \(h\) and base radius \(R\) by rotating the region under \(y=\dfrac{R}{h}x\), \(0\le x\le h\), about the \(x\)-axis.`, r`\(\pi\displaystyle\int_0^h\dfrac{R^2}{h^2}x^2\,dx=\pi\dfrac{R^2}{h^2}\cdot\dfrac{h^3}{3}=\tfrac13\pi R^2h\).`, "stretch"),

      sec("Summary"),
      key([
        ["Disc", r`\(V=\pi\displaystyle\int r^2\).`],
        ["Radius", "Distance from the curve to the axis of rotation."],
        ["Horizontal axis", r`Integrate in \(x\).`],
        ["Vertical axis", r`Integrate in \(y\).`],
      ]),
    ];
  },
});

// ───────────────────────── 8.9 ─────────────────────────
u8b["8.9"] = lesson({
  code: "8.9", unit: 8, official: "8.11–8.12", calc: "Both",
  title: "Solids of Revolution: Washers",
  parts: () => {
    const g = plot({ w: 360, h: 300, x: [-0.4, 1.5], y: [-1.5, 1.5], stepX: 0.5, stepY: 0.5, alt: "The region between y = x and y = x² on [0, 1], with the outer and inner radii from the line y = −1 marked" });
    g.shade((x) => x, (x) => x * x, 0, 1).curve((x) => x * x, 0, 1.2).curve((x) => x, 0, 1.3, { color: C.alt }).hline(-1, { color: C.grey }).seg(0.6, -1, 0.6, 0.6, { color: C.gold, width: 3 }).seg(0.72, -1, 0.72, 0.5184, { color: C.green, width: 3 }).label(0.08, -0.35, "R", { color: C.gold }).label(0.8, -0.35, "r", { color: C.green }).label(0.95, -1.2, "y = −1", { color: C.grey, size: 12 });
    return [
      lede(r`If the region does not touch the axis of rotation, the solid has a hole through it, like a pipe or a doughnut cut flat. Each slice is now a disc with a smaller disc removed: a washer. Its area is the difference of two circle areas, and there are two radii to find. The algebra is short. The mistakes are in the bookkeeping.`),
      goals([
        r`Identify the outer radius \(R\) and the inner radius \(r\).`,
        r`Set up washer integrals about the axes and about other lines.`,
        r`Explain why the integrand is \(R^2-r^2\) and not \((R-r)^2\).`,
        r`Evaluate on the calculator when the limits are not exact.`,
      ]),

      sec("The washer method"),
      thm("Volume by washers", r`<p>If each cross-section perpendicular to the axis of rotation is a washer with outer radius \(R\) and inner radius \(r\), then</p>\[ V=\pi\int_a^b\big(R^2-r^2\big)\,dx\quad\text{or}\quad V=\pi\int_c^d\big(R^2-r^2\big)\,dy. \]`),
      p(r`Both radii are measured from the axis of rotation. \(R\) reaches to the boundary of the region <strong>farther</strong> from the axis; \(r\) reaches to the boundary <strong>nearer</strong> to it.`),
      figure(g, r`Rotating the region between \(y=x\) and \(y=x^2\) about \(y=-1\). The outer radius runs from the axis to the line: \(R=x+1\). The inner radius runs from the axis to the parabola: \(r=x^2+1\).`),
      table(
        ["Axis", "Radius to a curve \\(y=f(x)\\) or \\(x=g(y)\\)"],
        [
          [r`\(y=k\), below the region`, r`\(f(x)-k\)`],
          [r`\(y=k\), above the region`, r`\(k-f(x)\)`],
          [r`\(x=h\), left of the region`, r`\(g(y)-h\)`],
          [r`\(x=h\), right of the region`, r`\(h-g(y)\)`],
        ],
      ),
      p(r`When the axis is above or to the right of the region the roles reverse: the curve that was on the bottom is now farther from the axis, so it gives the outer radius.`),

      sec("Worked examples"),
      ex("core", "About the x-axis", r`The region between \(y=x\) and \(y=x^2\) is rotated about the \(x\)-axis. Find the volume.`, [
        r`For \(0\le x\le1\) the line is farther from the axis: \(R=x\), \(r=x^2\).`,
        r`\(V=\pi\displaystyle\int_0^1(x^2-x^4)\,dx=\pi\left(\tfrac13-\tfrac15\right)\).`,
      ], r`\(V=\dfrac{2\pi}{15}\).`),
      ex("exam", "The same region about the y-axis", r`Rotate the same region about the \(y\)-axis.`, [
        r`Integrate in \(y\). The boundaries are \(x=y\) and \(x=\sqrt y\), for \(0\le y\le1\).`,
        r`Since \(\sqrt y\ge y\) there, the parabola is farther from the \(y\)-axis: \(R=\sqrt y\), \(r=y\).`,
        r`\(V=\pi\displaystyle\int_0^1(y-y^2)\,dy=\pi\left(\tfrac12-\tfrac13\right)\).`,
      ], r`\(V=\dfrac{\pi}{6}\).`),
      ex("exam", "About lines below and above", r`Rotate the same region about (a) \(y=-1\), (b) \(y=2\).`, [
        r`(a) \(R=x+1\) and \(r=x^2+1\). \(R^2-r^2=(x^2+2x+1)-(x^4+2x^2+1)=-x^4-x^2+2x\).`,
        r`\(V=\pi\displaystyle\int_0^1(-x^4-x^2+2x)\,dx=\pi\left(-\tfrac15-\tfrac13+1\right)=\dfrac{7\pi}{15}\).`,
        r`(b) The axis is above, so the parabola is farther: \(R=2-x^2\) and \(r=2-x\). \(R^2-r^2=x^4-5x^2+4x\).`,
        r`\(V=\pi\displaystyle\int_0^1(x^4-5x^2+4x)\,dx=\pi\left(\tfrac15-\tfrac53+2\right)=\dfrac{8\pi}{15}\).`,
      ], r`(a) \(\dfrac{7\pi}{15}\). (b) \(\dfrac{8\pi}{15}\).`),
      ex("stretch", "One region, two axes", r`The region between \(y=\sqrt x\) and \(y=\dfrac x2\) is rotated about (a) the \(x\)-axis, (b) the \(y\)-axis. Find each volume.`, [
        r`The curves meet at \((0,0)\) and \((4,2)\).`,
        r`(a) \(R=\sqrt x\), \(r=\dfrac x2\): \(V=\pi\displaystyle\int_0^4\left(x-\tfrac{x^2}{4}\right)dx=\pi\left(8-\tfrac{16}{3}\right)\).`,
        r`(b) In \(y\): \(R=2y\), \(r=y^2\) for \(0\le y\le2\): \(V=\pi\displaystyle\int_0^2(4y^2-y^4)\,dy=\pi\left(\tfrac{32}{3}-\tfrac{32}{5}\right)\).`,
      ], r`(a) \(\dfrac{8\pi}{3}\). (b) \(\dfrac{64\pi}{15}\).`),

      sec("Common errors"),
      mistake("(R − r)² in place of R² − r²", r`<p>The washer is a big disc with a small disc removed: \(\pi R^2-\pi r^2\). Squaring the difference of the radii gives the area of a disc whose radius is the thickness of the region, which is a different and much smaller solid.</p>`),
      mistake("radii not measured from the axis", r`<p>About \(y=-1\), the radius to \(y=x\) is \(x+1\), not \(x\). Draw the axis and draw both radii before writing anything.</p>`),
      mistake("outer and inner reversed", r`<p>A negative volume means \(R\) and \(r\) are swapped. This happens most often when the axis is above or to the right of the region.</p>`),
      mistake("π inside one term only", r`<p>\(\pi\) multiplies the whole difference: \(\pi\displaystyle\int(R^2-r^2)\), not \(\displaystyle\int(\pi R^2-r^2)\).</p>`),

      sec("Write it so it scores"),
      justify(
        r`Let \(R\) be the region enclosed by the graphs of \(f(x)=4-x^2\) and \(g(x)=x+2\), which intersect at \(x=-2\) and \(x=1\). Write, but do not evaluate, an integral expression for the volume of the solid generated when \(R\) is rotated about the line \(y=-3\).`,
        r`\(V=\pi\displaystyle\int_{-2}^{1}\Big[\big(4-x^2+3\big)^2-\big(x+2+3\big)^2\Big]dx\).`,
        r`The axis is below the region, so the upper curve gives the outer radius. Each radius is "curve minus \((-3)\)". Readers award one point for the form \(\pi\!\int(R^2-r^2)\) with correct limits and one or two for the radii, so writing the radii unsimplified keeps the reasoning visible.`,
      ),
      exam(r`<p>The usual area-and-volume question asks for one volume about a horizontal line that is not an axis. Expect it, and practise writing \(R\) and \(r\) as "curve minus line" or "line minus curve" without hesitation.</p>`),

      sec("Practice"),
      pq(r`The region between \(y=x^2\) and \(y=x^3\) is rotated about the \(x\)-axis. Find the volume.`, r`\(R=x^2\), \(r=x^3\) on \([0,1]\). \(\pi\displaystyle\int_0^1(x^4-x^6)\,dx=\dfrac{2\pi}{35}\).`, "core"),
      pq(r`The region bounded by \(y=2\), \(y=\sqrt x\) and the \(y\)-axis is rotated about the \(x\)-axis. Find the volume.`, r`\(R=2\), \(r=\sqrt x\) on \([0,4]\). \(\pi\displaystyle\int_0^4(4-x)\,dx=8\pi\).`, "core"),
      pq(r`The region between \(y=x^2\) and \(y=x^3\) is rotated about the \(y\)-axis. Find the volume.`, r`In \(y\): \(R=y^{1/3}\), \(r=y^{1/2}\). \(\pi\displaystyle\int_0^1\left(y^{2/3}-y\right)dy=\pi\left(\tfrac35-\tfrac12\right)=\dfrac{\pi}{10}\).`, "exam"),
      pq(r`The region between \(y=x\) and \(y=x^2\) is rotated about the line \(x=1\). Find the volume.`, r`The axis is to the right. \(R=1-y\), \(r=1-\sqrt y\). \(\pi\displaystyle\int_0^1\left(y^2-3y+2\sqrt y\right)dy=\pi\left(\tfrac13-\tfrac32+\tfrac43\right)=\dfrac{\pi}{6}\).`, "exam"),
      pq(r`(Calculator.) The region enclosed by \(y=\cos x\) and \(y=x^2\) is rotated about the \(x\)-axis. Find the volume to three decimal places.`, r`With \(a\approx0.824132\): \(\pi\displaystyle\int_{-a}^{a}(\cos^2x-x^4)\,dx\approx3.677\).`, "exam"),
      pq(r`A region lies between \(y=f(x)\) and \(y=g(x)\) with \(f(x)\gt g(x)\gt0\) on \([a,b]\). Explain, without computing, why rotating it about the \(x\)-axis gives a larger volume than \(\pi\displaystyle\int_a^b(f-g)^2\,dx\).`, r`\(f^2-g^2=(f-g)(f+g)\), and \(f+g\gt f-g\) because \(g\gt0\). So \(f^2-g^2\gt(f-g)^2\) at every \(x\), and the integrals compare the same way.`, "stretch"),

      sec("Summary"),
      key([
        ["Washer", r`\(V=\pi\displaystyle\int(R^2-r^2)\).`],
        ["R", "From the axis to the farther boundary."],
        ["r", "From the axis to the nearer boundary."],
        ["Never", r`\((R-r)^2\).`],
      ]),
    ];
  },
});

// ───────────────────────── 8.10 ─────────────────────────
u8b["8.10"] = lesson({
  code: "8.10", unit: 8, official: "8.4–8.12", calc: "Both",
  title: "Unit 8 Synthesis: The Area and Volume Free-Response Question",
  parts: () => {
    const g = plot({ w: 380, h: 300, x: [-0.6, 2.8], y: [-0.7, 4.8], alt: "The region between y = x² and y = 4x − x² from x = 0 to x = 2" });
    g.shade((x) => 4 * x - x * x, (x) => x * x, 0, 2).curve((x) => x * x, -0.5, 2.15).curve((x) => 4 * x - x * x, -0.15, 2.7, { color: C.alt }).dot(0, 0).dot(2, 4).label(1.0, 3.6, "y = 4x − x²", { color: C.alt, anchor: "end" }).label(1.55, 1.35, "y = x²").label(1.0, 1.9, "R", { size: 16 });
    return [
      lede(r`Almost every exam contains one free-response question built on a single region: find its area, rotate it, stand a solid on it. Nine points, about fifteen minutes. The mathematics is the last six lessons; what remains is to see a whole question worked the way a reader marks it, so that you know which lines on your page earn the points and which are decoration.`),
      goals([
        r`Work a complete area-and-volume question in the time allowed.`,
        r`Write set-ups that earn the integrand, limits and constant points separately.`,
        r`Know when to stop: set up only, or set up and evaluate.`,
        r`Score your own answer against a point-by-point guide.`,
      ]),

      sec("How the nine points are usually spread"),
      table(
        ["Part", "Typical task", "Points", "Awarded for"],
        [
          ["(a)", "Area of the region", "3", "integrand; limits; answer"],
          ["(b)", "Volume of revolution about a line", "3", "form \\(\\pi\\!\\int(R^2-r^2)\\); radii; answer or limits"],
          ["(c)", "Volume with given cross-sections, or a second rotation", "2–3", "integrand; constant and limits"],
        ],
      ),
      p(r`Notice how few of the points are for a final number. On most parts a correct set-up followed by an arithmetic slip loses one point, not three.`),

      sec("A complete question without a calculator"),
      figure(g, r`The region \(R\) enclosed by \(y=x^2\) and \(y=4x-x^2\).`),
      ex("exam", "Question 1", r`Let \(R\) be the region enclosed by the graphs of \(y=x^2\) and \(y=4x-x^2\). (a) Find the area of \(R\). (b) Find the volume of the solid generated when \(R\) is rotated about the \(x\)-axis. (c) \(R\) is the base of a solid whose cross-sections perpendicular to the \(x\)-axis are squares. Find its volume. (d) Write, but do not evaluate, an integral expression for the volume of the solid generated when \(R\) is rotated about the line \(y=5\).`, [
        r`Intersections: \(x^2=4x-x^2\) gives \(2x(x-2)=0\), so \(x=0\) and \(x=2\). At \(x=1\): \(3\gt1\), so \(y=4x-x^2\) is on top.`,
        r`(a) \(\displaystyle\int_0^2\big[(4x-x^2)-x^2\big]dx=\int_0^2(4x-2x^2)\,dx=\Big[2x^2-\tfrac23x^3\Big]_0^2=8-\tfrac{16}{3}=\tfrac83\).`,
        r`(b) \(\pi\displaystyle\int_0^2\big[(4x-x^2)^2-(x^2)^2\big]dx=\pi\int_0^2(16x^2-8x^3)\,dx=\pi\left(\tfrac{128}{3}-32\right)=\dfrac{32\pi}{3}\).`,
        r`(c) Side \(s=4x-2x^2\). \(\displaystyle\int_0^2(4x-2x^2)^2\,dx=\int_0^2(16x^2-16x^3+4x^4)\,dx=\tfrac{128}{3}-64+\tfrac{128}{5}=\tfrac{64}{15}\).`,
        r`(d) The axis \(y=5\) is above \(R\), so the lower curve is farther from it: \(\pi\displaystyle\int_0^2\Big[\big(5-x^2\big)^2-\big(5-4x+x^2\big)^2\Big]dx\).`,
      ], r`(a) \(\tfrac83\) &nbsp; (b) \(\dfrac{32\pi}{3}\) &nbsp; (c) \(\tfrac{64}{15}\) &nbsp; (d) as written; do not expand it.`),
      p(r`<strong>Marking it.</strong> (a) one point for the integrand \(4x-2x^2\), one for the answer. (b) one point for \(\pi\) and the limits, one for the integrand \(R^2-r^2\), one for the answer. (c) one for the integrand, one for the answer. (d) one for each radius squared, in the right order. An answer of \(\pi\displaystyle\int_0^2(4x-2x^2)^2dx\) in part (b) earns the limits-and-constant point only.`),

      sec("A complete question with a calculator"),
      ex("exam", "Question 2", r`Let \(S\) be the region in the first quadrant enclosed by the graphs of \(y=\ln(x+1)\) and \(y=\dfrac{x^2}{4}\). (a) Find the area of \(S\). (b) Find the volume of the solid generated when \(S\) is rotated about the \(x\)-axis. (c) Find the volume when \(S\) is rotated about the line \(y=-1\). (d) \(S\) is the base of a solid whose cross-sections perpendicular to the \(x\)-axis are semicircles with diameters in \(S\). Find its volume.`, [
        r`The graphs meet at \(x=0\) and at \(x=b\approx2.139099\). Store \(b\). Between them the logarithm is on top.`,
        r`(a) \(\displaystyle\int_0^b\left[\ln(x+1)-\frac{x^2}{4}\right]dx\approx0.636\).`,
        r`(b) \(\pi\displaystyle\int_0^b\left[\big(\ln(x+1)\big)^2-\frac{x^4}{16}\right]dx\approx2.024\).`,
        r`(c) \(\pi\displaystyle\int_0^b\left[\big(\ln(x+1)+1\big)^2-\left(\frac{x^2}{4}+1\right)^2\right]dx\approx6.021\).`,
        r`(d) \(\dfrac{\pi}{8}\displaystyle\int_0^b\left[\ln(x+1)-\frac{x^2}{4}\right]^2dx\approx0.089\).`,
      ], r`Four integrals, each written out and then evaluated by the calculator. No antiderivative was found, and none was expected.`),
      p(r`<strong>Marking it.</strong> The upper limit \(b\) must be shown to at least three decimal places, or declared as a stored value with the equation it solves. After that, each part is a set-up point or two and an answer point. A correct decimal with no integral on the page earns the answer point only.`),

      sec("Common errors"),
      mistake("evaluating when told not to", r`<p>"Write, but do not evaluate" parts are marked on the integral. Time spent expanding is time taken from another question.</p>`),
      mistake("a rounded limit carried forward", r`<p>Using \(2.14\) for \(b\) changes the third decimal place of the volume. Use the stored value.</p>`),
      mistake("the same radii for every axis", r`<p>Each new axis of rotation needs its own \(R\) and \(r\). Redraw them; do not adapt the previous part by guesswork.</p>`),
      mistake("no set-up on the calculator section", r`<p>The integral is what earns most of the credit. Write it in standard notation, not in calculator syntax.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the region \(R\) in Question 1, the vertical line \(x=k\) divides \(R\) into two regions of equal area. Write, but do not solve, an equation involving an integral whose solution gives the value of \(k\).`,
        r`\(\displaystyle\int_0^k(4x-2x^2)\,dx=\frac12\cdot\frac83\), that is, \(\displaystyle\int_0^k(4x-2x^2)\,dx=\frac43\).`,
        r`One point is for an integral of the correct integrand with \(k\) as a limit, and one for setting it equal to half the area found in part (a). An equation such as \(\displaystyle\int_0^k=\int_k^2\) with the integrands written in is equally acceptable.`,
      ),
      exam(r`<p>Budget fifteen minutes. If part (b) will not come out, write its set-up, leave it, and collect the set-up points in parts (c) and (d): the parts are marked independently.</p>`),

      sec("Practice"),
      pq(r`For the region \(R\) of Question 1, find the average value of the vertical distance between the two curves on \([0,2]\).`, r`\(\dfrac12\displaystyle\int_0^2(4x-2x^2)\,dx=\dfrac12\cdot\dfrac83=\dfrac43\).`, "core"),
      pq(r`For \(R\), write an integral for the volume when \(R\) is rotated about the line \(y=-2\).`, r`\(\pi\displaystyle\int_0^2\Big[(4x-x^2+2)^2-(x^2+2)^2\Big]dx\).`, "exam"),
      pq(r`For \(R\), find the volume of the solid whose cross-sections perpendicular to the \(x\)-axis are semicircles with diameters in \(R\).`, r`\(\dfrac{\pi}{8}\cdot\dfrac{64}{15}=\dfrac{8\pi}{15}\), using the integral from part (c).`, "exam"),
      pq(r`For \(R\), at what value of \(x\) is the vertical distance between the curves greatest, and what is that distance?`, r`\(d(x)=4x-2x^2\), \(d'(x)=4-4x=0\) at \(x=1\); \(d''\lt0\). The greatest distance is \(d(1)=2\).`, "exam"),
      pq(r`(Calculator.) For the region \(S\) of Question 2, find the volume when the cross-sections perpendicular to the \(x\)-axis are squares.`, r`\(\displaystyle\int_0^b\left[\ln(x+1)-\tfrac{x^2}{4}\right]^2dx=\dfrac{8}{\pi}(0.088814)\approx0.226\).`, "stretch"),

      sec("Summary"),
      key([
        ["Area", r`\(\displaystyle\int(\text{top}-\text{bottom})\).`],
        ["Rotation", r`\(\pi\displaystyle\int(R^2-r^2)\), radii from the axis.`],
        ["Cross-sections", r`\(\displaystyle\int(\text{constant})\cdot s^2\).`],
        ["Marks", "Mostly for the set-up. Write it first."],
      ]),
    ];
  },
});
