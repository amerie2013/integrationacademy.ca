import { fig, revolveRectangle, revolveTriangle, revolveSemicircle, trapezoid } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "10.5",
  title: "Solids of Revolution",
  intro: "Spinning a flat 2D region a full $360^\\circ$ around a line (the <b>axis of revolution</b>) sweeps out a 3D <b>solid of revolution</b>. The three building blocks are: a rectangle about one of its sides sweeps a <b>cylinder</b>; a right triangle about a leg sweeps a <b>cone</b>; and a semicircle about its diameter sweeps a <b>sphere</b>. More advanced regions build more advanced solids: a right trapezoid about its perpendicular leg sweeps a <b>frustum</b> (a cone with the tip cut off), a rectangle that does <i>not</i> touch the axis sweeps a <b>hollow cylinder (tube)</b> — found by subtracting an inner cylinder from an outer one — and a region offset entirely from the axis sweeps a <b>torus</b> (donut shape). This worksheet identifies the solid <i>and</i> computes its volume.",
  examples: [
    ["Example 1: Square about a side",
      "A $5\\times5$ square is rotated $360^\\circ$ about one of its sides. Identify the solid and find its volume.",
      fig(revolveRectangle(), "A rectangle (square is a special rectangle) about a side sweeps a cylinder.") +
      "The side of rotation becomes the axis; the opposite side sweeps out a circle of radius $5$. Since both dimensions are $5$, this is a cylinder with $r=5$, $h=5$.<br>" +
      "$V=\\pi r^{2}h=\\pi(25)(5)=125\\pi$.<br>" +
      "<b>Answer:</b> cylinder; $V=125\\pi$."],

    ["Example 2: Rectangle about a side",
      "A $4\\times6$ rectangle is rotated $360^\\circ$ about its side of length $6$. Identify the solid and find its volume.",
      "The side of length $6$ is the axis (becomes the height); the perpendicular side of length $4$ sweeps out the radius. Cylinder with $r=4$, $h=6$.<br>" +
      "$V=\\pi r^{2}h=\\pi(16)(6)=96\\pi$.<br>" +
      "<b>Answer:</b> cylinder; $V=96\\pi$."],

    ["Example 3: Right triangle about a leg",
      "A right triangle with legs $3$ and $4$ is rotated about the leg of length $4$. Identify the solid and find its volume.",
      fig(revolveTriangle(), "A right triangle about a leg sweeps a cone: the other leg becomes the radius, the axis leg becomes the height.") +
      "The leg of length $4$ is the axis (height); the leg of length $3$ sweeps out the radius. Cone with $r=3$, $h=4$.<br>" +
      "$V=\\dfrac13\\pi r^{2}h=\\dfrac13\\pi(9)(4)=\\dfrac{36\\pi}{3}=12\\pi$.<br>" +
      "<b>Answer:</b> cone; $V=12\\pi$."],

    ["Example 4: Semicircle about its diameter",
      "A semicircle of radius $5$ is rotated about its diameter. Identify the solid and find its volume.",
      fig(revolveSemicircle(), "A semicircle about its diameter sweeps a full sphere.") +
      "Every point on the semicircle is a distance $5$ from the center of the diameter, so the swept solid is a sphere of radius $5$.<br>" +
      "$V=\\dfrac43\\pi r^{3}=\\dfrac43\\pi(125)=\\dfrac{500\\pi}{3}$.<br>" +
      "<b>Answer:</b> sphere; $V=\\dfrac{500\\pi}{3}$."],

    ["Example 5: Same rectangle, different axis",
      "The same $4\\times6$ rectangle from Example 2 is instead rotated about its side of length $4$. Find the new volume.",
      "Now the side of length $4$ is the axis (height), and the side of length $6$ sweeps the radius — the roles of $r$ and $h$ swap. Cylinder with $r=6$, $h=4$.<br>" +
      "$V=\\pi r^{2}h=\\pi(36)(4)=144\\pi$.<br>" +
      "<b>Answer:</b> cylinder; $V=144\\pi$. <i>Notice this is a different volume from Example 2 ($96\\pi$) — the choice of axis matters!</i>"],

    ["Example 6: Right trapezoid about its perpendicular leg — a frustum",
      "A right trapezoid has parallel sides $6$ and $2$ and a perpendicular leg (height) of $9$. It is rotated about that perpendicular leg. Identify the solid and find its volume.",
      fig(trapezoid(), "A right trapezoid's two parallel sides become the two radii of a frustum when rotated about the perpendicular leg.") +
      "The perpendicular leg is the axis; the two parallel sides sweep out two different circles — a <b>frustum</b> (cone with the tip sliced off) with radii $R=6$, $r=2$, and height $h=9$.<br>" +
      "Frustum volume: $V=\\dfrac13\\pi h(R^{2}+Rr+r^{2})=\\dfrac13\\pi(9)(36+12+4)=\\dfrac13\\pi(9)(52)$<br>" +
      "$V=3\\pi(52)=156\\pi$.<br>" +
      "<b>Answer:</b> frustum; $V=156\\pi$."],

    ["Example 7: Rectangle offset from the axis — a hollow cylinder",
      "A rectangle spans from $3$ to $5$ units away from the axis (so it does not touch the axis) and is $10$ units tall. It is rotated $360^\\circ$. Identify the solid and find its volume.",
      "Since the rectangle never touches the axis, it sweeps out a <b>hollow cylinder (tube)</b>: an outer cylinder of radius $R=5$ minus an inner cylinder of radius $r=3$, both height $10$.<br>" +
      "$V=\\pi R^{2}h-\\pi r^{2}h=\\pi h(R^{2}-r^{2})=\\pi(10)(25-9)=\\pi(10)(16)$<br>" +
      "$V=160\\pi$.<br>" +
      "<b>Answer:</b> hollow cylinder; $V=160\\pi$."],

    ["Example 8: Composite region — cylinder + cone",
      "A rectangle ($4\\times6$, axis along the side of length $6$) sits directly below a right triangle (legs $4$ and $5$, axis along the leg of length $5$), sharing the same radius $4$ and the same axis. Both are rotated together. Find the total volume of the resulting solid.",
      fig(`<div style="display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap">${revolveRectangle()}${revolveTriangle()}</div>`,
        "Stacking a rectangle and a right triangle on the same axis, then revolving, produces a cylinder topped with a cone.") +
      "<b>Cylinder part:</b> $r=4$, $h=6$: $V_1=\\pi(16)(6)=96\\pi$.<br>" +
      "<b>Cone part:</b> $r=4$, $h=5$: $V_2=\\dfrac13\\pi(16)(5)=\\dfrac{80\\pi}{3}$.<br>" +
      "<b>Total:</b> $V=96\\pi+\\dfrac{80\\pi}{3}=\\dfrac{288\\pi}{3}+\\dfrac{80\\pi}{3}=\\dfrac{368\\pi}{3}$.<br>" +
      "<b>Answer:</b> $V=\\dfrac{368\\pi}{3}$."],

    ["Example 9: Right triangle about its hypotenuse — a bicone",
      "A right triangle with legs $6$ and $8$ (hypotenuse $10$) is rotated about its <i>hypotenuse</i>. Identify the solid and find its volume.",
      "Rotating about the hypotenuse (instead of a leg) sweeps out two cones joined base-to-base — a <b>bicone</b> — because the altitude from the right angle to the hypotenuse becomes the shared radius, and the two segments of the hypotenuse become the two heights.<br>" +
      "<b>Shared radius</b> (altitude to the hypotenuse): $r=\\dfrac{(\\text{leg}_1)(\\text{leg}_2)}{\\text{hyp}}=\\dfrac{6\\times8}{10}=4.8$.<br>" +
      "<b>Heights</b> (the two segments the altitude divides the hypotenuse into): $h_1+h_2=10$ (they sum to the full hypotenuse — no need to find each one separately since the volume formula only needs the total).<br>" +
      "$V=\\dfrac13\\pi r^{2}(h_1+h_2)=\\dfrac13\\pi(4.8)^{2}(10)=\\dfrac13\\pi(23.04)(10)=76.8\\pi=\\dfrac{384\\pi}{5}$.<br>" +
      "<b>Answer:</b> bicone; $V=\\dfrac{384\\pi}{5}=76.8\\pi$."],

    ["Example 10: Region offset entirely from the axis — a torus",
      "A semicircle of radius $3$ is centered $10$ units from the axis of revolution (the semicircle never touches the axis). It is rotated $360^\\circ$. Identify the solid and find its volume.",
      "Because the region is fully offset from the axis, this sweeps out a <b>torus</b> (donut shape), not a sphere. Its volume formula is $V=2\\pi^{2}Rr^{2}$, where $R$ is the distance from the axis to the tube's center and $r$ is the tube's (circle's) radius.<br>" +
      "$V=2\\pi^{2}(10)(3)^{2}=2\\pi^{2}(10)(9)=180\\pi^{2}$.<br>" +
      "<b>Answer:</b> torus; $V=180\\pi^{2}$."],
  ],
  questions: [
    ["Problem 1: Square", "Square side $7$ rotated about one side. Identify the solid and find its volume.", "Cylinder; $V=343\\pi$"],
    ["Problem 2: Right triangle", "Legs $5$ and $12$; rotate about leg $12$. Identify the solid and find its volume.", "Cone; $V=100\\pi$"],
    ["Problem 3: Semicircle", "Semicircle $r=6$ about its diameter. Identify the solid and find its volume.", "Sphere; $V=288\\pi$"],
    ["Problem 4: Rectangle (axis 1)", "$3\\times8$ rectangle rotated about the side of length $3$. Find the volume.", "$192\\pi$"],
    ["Problem 5: Rectangle (axis 2)", "The same $3\\times8$ rectangle rotated about the side of length $8$ instead. Find the volume.", "$72\\pi$"],
    ["Problem 6: Frustum", "Right trapezoid, parallel sides $6$ and $2$, perpendicular leg $9$, rotated about that leg. Find the volume.", "$156\\pi$"],
    ["Problem 7: Hollow cylinder", "A rectangle spans from $2$ to $6$ units from the axis, height $12$, rotated $360^\\circ$. Find the volume.", "$384\\pi$"],
    ["Problem 8: Composite", "A cylinder ($r=3$, $h=5$) is topped by a cone ($r=3$, $h=4$) on the same axis. Find the total volume.", "$57\\pi$"],
    ["Problem 9: Identify", "Rectangle rotated about one side. Name the solid.", "Cylinder"],
    ["Problem 10: Identify", "Right triangle rotated about a leg. Name the solid.", "Cone"],
    ["Problem 11: Identify", "Semicircle rotated about its diameter. Name the solid.", "Sphere"],
    ["Problem 12: Identify", "Right trapezoid rotated about its perpendicular leg. Name the solid.", "Frustum"],
    ["Problem 13: Identify", "Rectangle rotated with a gap between it and the axis. Name the solid.", "Hollow cylinder (tube)"],
    ["Problem 14: Word problem", "A vase's outer profile is modeled as a frustum: top radius $3$, bottom radius $6$, height $10$. Find its volume.", "$210\\pi$"],
    ["Problem 15: Challenge", "A right triangle with legs $9$ and $12$ (hypotenuse $15$) is rotated about its hypotenuse. Find the volume of the resulting bicone.", "$\\dfrac{1296\\pi}{5}$ (=$259.2\\pi$)"],
  ],
};
